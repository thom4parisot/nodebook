#!/usr/bin/env node

'use strict';

const URL = process.env.URL ||
  'http://data.assemblee-nationale.fr/static/openData/repository/LOI/dossiers_legislatifs/Dossiers_Legislatifs_XIV.json.zip';

const api = require('./index');

api
  .fetchDocument({
    url: URL,
    extname: '.json',
  })
  .then(doc =>
    api.fetchRecords(
      doc,
      'export.dossiersLegislatifs.dossier.*.dossierParlementaire.titreDossier.titre',
    ))
  .then(records => api.analysePopularKeywords(records))
  .then(stats => process.stdout.write(stats.keywords))
  .catch(err => process.stderr.write(err));
