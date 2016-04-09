
'use strict';

const request = require('hyperquest');
const unzip = require('unzip');
const JSONStream = require('JSONStream');
const extname = require('path').extname;

const retext = require('retext');
const retextKeywords = require('retext-keywords');
const retextStopwords = require('./retext-stopwords');
const stopwordsFr = require('stopwords/dist/fr.json');

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

      retext()
        .use(retextStopwords, { stopwords: stopwordsFr })
        .use(retextKeywords)
        .process(text, (err, file) => {
            if (err) {
            return reject(err);
          }

          resolve({
            keywords: file.namespace('retext').keywords,
            keyphrases: file.namespace('retext').keyphrases
          });
        });
    });
  }
};
