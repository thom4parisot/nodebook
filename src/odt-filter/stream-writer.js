'use strict';

var through = require('through');
var sax = require('sax');
var helpers = require('./convert-helpers.js');

var returnValue = helpers.returnValue;
var wrapValue = helpers.wrapValue;
var writeToStream = helpers.writeToStream;
var instruction = helpers.XMLInstruction;
var applyFilters = helpers.applyTagFilters;

function withNode(filters, parser, fn){
  filters.push({
    condition: function(){ return true; },
    callback: fn
  });
}

function withNodeAttribute(filters, parser, attributeName, attributeValue, fn){
  filters.push({
    condition: function(tag){
      return tag.attributes[attributeName] && tag.attributes[attributeName].match(attributeValue);
    },
    callback: fn
  });
}

function withChildNode(filters, parser, condition, fn){
  filters.push({
    active: false,
    condition: function(tag){
      var self = this;

      // Activate the filter if the tag name condition is met
      if (tag.name.match(condition) && !self.active){
        self.active = true;

        var closeTagFn = function(closeTag){
          if (closeTag === tag.name && self.active){
            self.active = false;
            parser.removeListener('closetag', closeTagFn);
          }
        };

        // Registering the auto-cleanup as we exit the tag
        parser.on('closetag', closeTagFn);
      }

      return self.active;
    },
    callback: fn
  });
}

module.exports = {
  rewrite: function (readStream){
    var filters = {
      opentag: []
    };

    var parser = sax.createStream(true, { lowercase: true });

    parser._parser.ENTITIES['amp'] = '&amp;';
    parser._parser.ENTITIES['apos'] = '&apos;';
    parser._parser.ENTITIES['gt'] = '&gt;';
    parser._parser.ENTITIES['lt'] = '&lt;';

    var outStream = through();
    var write = writeToStream.bind(null, outStream);
    var print = write.bind(null, returnValue());
    var printComment = write.bind(null, wrapValue('<!--', '-->'));
    var printCDATA = write.bind(null, wrapValue('<![CDATA[', ']]>'));
    var printCloseTag = write.bind(null, wrapValue('</', '>'));
    var printOpenTag = write.bind(null, wrapValue('<', '>', applyFilters(filters.opentag)));
    var printInstruction = write.bind(null, wrapValue('<?', '?>', instruction));

    outStream.node = withNode.bind(null, filters.opentag, parser);
    outStream.attribute = withNodeAttribute.bind(null, filters.opentag, parser);
    outStream.childOf = withChildNode.bind(null, filters.opentag, parser);

    parser.on('sgmldeclaration', print);
    parser.on('doctype', print);
    parser.on('text', print);
    parser.on('comment', printComment);
    parser.on('cdata', printCDATA);
    parser.on('closetag', printCloseTag);
    parser.on('opentag', printOpenTag);
    parser.on('processinginstruction', printInstruction);

    readStream.pipe(parser);

    return outStream;
  }
};