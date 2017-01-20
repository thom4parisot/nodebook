'use strict';

const http = require('http');
const jsdom = require('jsdom').jsdom;
const request = require('request');

const url = 'http://www.eyrolles.com/Informatique/Nouveautes/';

const request = http.get(url);

const formatTitles = (list, book) => `${list}\n- ${book.title} (${book.url})`;

const queryHeadlinesFromHtmlSource = (html) => {
  const doc = jsdom(html);

  console.log(doc.querySelectorAll('[itemprop="Headline"] > a'));

  return [];
};

const titles = [];

request.on('error', err => console.log('La demande a échoué : ', err.message));

request.on('response', (response) => {
  response.setEncoding('utf8');

  response.on('data', (chunk) => {
    titles = titles.concat(getHeadlinesFromHtmlSource(chunk));
  });

  response.on('end', () => {
    console.log('Liste des livres : %s', titles.reduce(formatTitles, ''));
  });
});

request.end();
