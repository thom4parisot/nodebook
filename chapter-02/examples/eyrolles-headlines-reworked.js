'use strict';

const http = require('http');
const trumpet = require('trumpet');
const tr = trumpet();

const url = 'http://www.eyrolles.com/Informatique/Nouveautes/';
const request = http.get(url);

const formatTitles = (list, book) => `${list}'\n- ${book.title} (${book.url})`;

let titles = [];

request.on('error', err => console.log('La demande a échoué : ', err.message));

request.on('response', response => {
  response.setEncoding('utf8');

  tr.selectAll('[itemprop="Headline"] > a', a => {
    a.createReadStream().on('data', headline => {
      a.getAttribute('href', url => {
        titles.push({url, title: String(headline)});
      });
    });
  });

  response.pipe(tr);

  tr.on('end', () => {
    console.log('Liste des livres : %s', titles.reduce(formatTitles, ''));
  });
});

request.end();
