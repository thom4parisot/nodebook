'use strict';

const request = require('request');
const cheerio = require('cheerio');

request.get('https://google.fr/search?q=open+data', (err, res, body) => {
  if (err) {
    return console.error(err);
  }

  const $ = cheerio.load(body);
  const hrefs = $('a[href^="/url?"]').map((i, el) => $(el).attr('href')).get();

  console.log(hrefs);
});
