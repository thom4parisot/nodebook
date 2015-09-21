'use strict';

var request = require('request');
var cheerio = require('cheerio');

request.get('https://google.fr/search?q=open+data', function(err, res, body){
  if (err) {
    return console.error(err);
  }

  var $ = cheerio.load(body);
  var hrefs = $('a[href^="/url?"]').map(function(i, el){
    return $(el).attr('href');
  }).get();

  console.log(hrefs);
});