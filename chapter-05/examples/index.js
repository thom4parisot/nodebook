'use strict';

const request = require('hyperquest');
const unzip = require('unzip');
const JSONStream = require('JSONStream');
const extname = require('path').extname;

const words = require('talisman/tokenizers/words/naive').default;
const freq = require('talisman/stats/frequencies').absolute;
const bigrams = require('talisman/stats/ngrams').bigrams;
const metaphone = require('talisman/phonetics/metaphone').default;
const stopwords = require('stopwords/dist/fr.json');
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
      doc
        .pipe(JSONStream.parse(jsonPath))
        .on('error', err => reject(err))
        .on('data', d => records.push(d))
        .on('end', () => resolve(records));
    });
  },
  analysePopularKeywords(records, maxKeywords = 20) {
    return new Promise(resolve => {
      const text = Array.isArray(records) ? records.join('\n') : records;
      const tokens = words(text)
        .filter(token => stopwords.indexOf(token) === -1)
        .filter(token => !Number.isFinite(parseFloat(token)));

      const allKeywords = []
        .concat(...bigrams(tokens))
        .map(w => [metaphone(w), w]);

      const keywordsMap = new Map(allKeywords);
      const keywordsFrequency = freq(allKeywords.map(w => w[0]));

      const keywords = map(keywordsFrequency, (count, k) => {
        return {
          keyword: keywordsMap.get(k),
          count,
        };
      })
        .sort((a, b) => b.count - a.count)
        .slice(0, maxKeywords)
        .map(d => d.keyword);

      resolve({keywords});
    });
  },
};
