#!/usr/bin/env node

'use strict';

const { join } = require('path');

const argv = require('yargs')
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

const remoteSource = require('../lib/remote-source');
const filter = require('../lib/filter');

const options = {
  provider: argv.provider,
  source: argv.year,
  outdir: argv.outdir && join(argv.outdir, argv.year + '.xls')
};

remoteSource.request(options, (response) => {
  remoteSource.saveResponseTo(response, options.outdir);

  filter.toJSON(response);
});
