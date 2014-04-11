#!/usr/bin/env node

var cmd = require('commander');

cmd
  .version('0.1.0')
  .option('-s, --silent', 'Silent. Will not process data to stdout.', false)
  .parse(process.argv);

var xml = require('./stream-writer.js').rewrite(process.stdin);

var replaceStyle = require('./convert-helpers.js').styleReplace;
var setStyle = require('./convert-helpers.js').styleSet;

xml.node(replaceStyle('Text_20_body', 'TexteCourant'));
xml.node(replaceStyle('First_20_paragraph', 'TexteCourant'));
xml.node(replaceStyle('Heading_20_1', 'ChapitreTitre'));
xml.node(replaceStyle('Heading_20_2', 'TitreNiveau1'));
xml.node(replaceStyle('Heading_20_3', 'TitreNiveau2'));
xml.childOf('text:list-item', replaceStyle(/P\d+/, 'ListeAPuce'));

if (!cmd.silent){
  xml.pipe(process.stdout);
}

