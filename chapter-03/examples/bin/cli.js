#!/usr/bin/env node

'use strict';

var join = require('path').join;

var argv = require('yargs')
  .usage('Usage: $0 --outdir <path> [--year <YYYY>] [--provider <pkg.config.key>]')
  .options('y', {
    alias: 'year',
    default: (new Date).getUTCFullYear()
  })
  .options('o', {
    alias: 'outdir'
  })
  .options('p', {
    alias: 'provider',
    default: 'opendata.bordeaux.fr'
  })
  .strict()
  .argv;

var remoteSource = require('../lib/remote-source');
var filter = require('../lib/filter');

var options = {
  provider: argv.provider,
  source: argv.year,
  outdir: argv.outdir && join(argv.outdir, argv.year + '.xls')
};

remoteSource.request(options, function(response){
  remoteSource.saveResponseTo(response, options.outdir);

  filter.toJSON(response);
});
