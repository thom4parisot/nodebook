'use strict';

var STYLE_ATTRIBUTE = 'text:style-name';

var styleMatches = function (item, styleName) {
  if (!item || item.attributes === undefined || item.attributes[STYLE_ATTRIBUTE] === undefined) {
    return false;
  }

  return item.attributes[STYLE_ATTRIBUTE].match(styleName);
};

var returnValue = function returnValue(){
  return function (text){
    return text;
  };
};

var entity = function encodeEntity(str) {
  return str.replace('"', '&quot;');
};

module.exports = {
  XMLInstruction:function instruction(tag) {
    return tag.name + ' ' + tag.body;
  },
  applyTagFilters: function applyFilters(filters){
    return function(tag){
      filters
        .filter(function(filter){
          return filter.condition(tag)
        })
        .forEach(function(filter){
          tag = filter.callback(tag);
        });

      return tag.name + Object.keys(tag.attributes || []).reduce(function(prev, key){
        return prev + ' ' + key + '="'+ entity(tag.attributes[key]) +'"';
      }, '');
    }
  },
  styleReplace: function (oldStyleName, newStyleName){
    return function(item){
      if (styleMatches(item, oldStyleName)) {
        item.attributes[STYLE_ATTRIBUTE] = newStyleName;
      }

      return item;
    };
  },
  styleSet: function (attributeName, attributeValue){
    return function(item){
      item.attributes['style:' + attributeName] = attributeValue;

      return item;
    };
  },
  returnValue: returnValue,
  wrapValue: function(fragmentStart, fragmentEnd, transform){
    transform = transform || returnValue();

    return function (text){
      return fragmentStart + transform(text) + fragmentEnd;
    }
  },
  writeToStream: function writeToStream(stream, fn, text){
    stream.write(fn(text));
  }
};