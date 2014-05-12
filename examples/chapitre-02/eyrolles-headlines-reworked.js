'use strict';

var http = require('http');
var jsdom = require('jsdom').jsdom;
var request = require('request');

var url = 'http://www.eyrolles.com/Informatique/Nouveautes/';

var request = http.get(url);

var formatTitles = function(list, book){
  return list + '\n- ' + book.title + ' (' + book.url + ')';
};

var queryHeadlinesFromHtmlSource = function(html){
  var doc = jsdom(html);

  console.log(doc.querySelectorAll('[itemprop="Headline"] > a'));

  return [];
};

var titles = [];

request.on('error', function(err){
  console.log('La demande a échoué : ', err.message);
});

request.on('response', function(response){
  response.setEncoding('utf8');

  response.on('data', function(chunk){
    titles = titles.concat(getHeadlinesFromHtmlSource(chunk));
  });

  response.on('end', function(){
    console.log('Liste des livres : %s', titles.reduce(formatTitles, ''));
  });
});

request.end();