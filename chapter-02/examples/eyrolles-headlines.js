'use strict';

const http = require('http');
const url = 'http://www.eyrolles.com/Informatique/Nouveautes/';
const request = http.get(url);

const getHeadlinesFromHtmlSource = (html) => {
  const newTitles = [];
  const re = /h2 itemprop="Headline"><a href="([^"]+)">(.+)<\/a><\/h2/gm;
  let title = '';

  // eslint-disable-next-line no-cond-assign
  while(title = re.exec(html)){
    newTitles.push({ url: title[1], title: title[2] });
  }

  return newTitles;
};

const formatTitles = (list, book) => `${list}'\n- ${book.title} (${book.url})`;

let titles = [];

request.on('error', (err) => {
  console.log('La demande a échoué : ', err.message);
});

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
