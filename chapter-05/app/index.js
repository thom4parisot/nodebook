
'use strict';

const request = require('hyperquest');
const unzip = require('unzip');
const JSONStream = require('JSONStream');
const extname = require('path').extname;

const words = require('talisman/tokenizers/words/naive').default;
const freq = require('talisman/stats/frequencies').absolute;
const trigrams = require('talisman/stats/ngrams').trigrams;
const stopwords = new Set(require('stopwords/dist/fr.json'));
const map = require('lodash/map');

module.exports = {
  fetchDocument(options) {
    return new Promise((resolve, reject) => {
      request(options.url)
        .pipe(unzip.Parse())
        .on('error', err => reject(err))
        .on('entry', entry => {
          if (extname(entry.path) !== options.extname) {
            return entry.autodrain();
          }

          //this.close();
          resolve(entry);
        });
    });
  },

  fetchRecords(doc, jsonPath) {
    const records = [];

    return new Promise((resolve, reject) => {
      doc.pipe(JSONStream.parse(jsonPath))
        .on('error', err => reject(err))
        .on('data', d => records.push(d))
        .on('end', () => resolve(records));
    });
  },

  analysePopularKeywords(records) {
    return new Promise((resolve, reject) => {
      const text = Array.isArray(records) ? records.join(`\n`) : records;
      const tokens = words(text)
        .filter(token => !stopwords.has(token))
        .filter(token => !(token == parseFloat(token)));
      const grams = trigrams(tokens);

      const keywords = map(freq([].concat(...grams)), (v, k) => ({k, v}))
        .sort((a, b) => b.v - a.v)
        .slice(0, 20)
        .map(d => d.k);

      resolve({ keywords });
    });
  }
};
