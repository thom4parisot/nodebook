'use strict';

var http = require('http');
var jsdom = require('jsdom').jsdom;

var url = 'http://www.eyrolles.com/Informatique/Nouveautes/';

var request = http.get(url);

var getHeadlinesFromHtmlSource = function(html){
  var newTitles = [];
  var re = /h2 itemprop="Headline"><a href="([^"]+)">(.+)<\/a><\/h2/gm;
  var title = '';

  while(title = re.exec(html)){
    newTitles.push({ url: title[1], title: title[2] });
  }

  return newTitles;
};

var formatTitles = function(list, book){
  return list + '\n- ' + book.title + ' (' + book.url + ')';
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