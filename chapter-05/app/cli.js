'use strict';

const URL = 'http://data.assemblee-nationale.fr/static/openData/repository/LOI/dossiers_legislatifs/Dossiers_Legislatifs_XIV.json.zip';
const request = require('hyperquest');
const unzip = require('unzip');
const JSONStream = require('JSONStream');
// const natural = require('natural');

// const ngrams = natural.NGrams;
// const tfidf = new natural.TfIdf();

request(URL)
  .pipe(unzip.Parse())
  .on('entry', entry => {
    entry
      .pipe(JSONStream.parse(['export', 'dossiersLegislatifs', true, {emitKey: true}]))
      .on('data', (d) => {
        // tfidf.addDocument(d.value.dossierParlementaire.titreDossier.titre)
        console.log(d.value.dossierParlementaire);
      })
      .on('end', () => {
        // console.log(tfidf.tfidfs('terrorisme', (i, measure) => {
        //   console.log(i, measure);
        // }));
      });

    entry.on('error', err => console.error(err))
  });
