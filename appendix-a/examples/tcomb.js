'use strict';

const t = require('tcomb');

const GPS = t.struct({                                // <1>
  lat: t.Number,
  lon: t.Number,
}, {strict: true});

const Bordeaux = GPS({ lat: 44.8638, lon: -0.6561 });
const Crest = GPS({ lat: 44.7311, long: 4.9861 });    // <2>
const Toulouse = GPS({ lat: 43.6008, lon: 'r0s3' });  // <3>
