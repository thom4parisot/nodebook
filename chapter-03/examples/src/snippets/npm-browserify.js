'use strict';

var $ = require('cheerio');

var $list = $('<ul/>');

$list.append('<li>Node.js</li>');
$list.append('<li>CSS maintenables</li>');
$list.append('<li>Open Sky</li>');

console.log($list.find('li:last-child').text()); // <1>