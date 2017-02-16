'use strict';

const companies = ['SNCF', 'Reinfe'];
const sncf = companies[0];

const companyDetails = {
  [sncf]: {
    // <1>
    country: 'France',
  },
};

companyDetails[companies[1]] = {
  // <2>
  country: 'Spain',
};

console.log(companyDetails); // <3>
console.log({sncf, foo: 'bar'}); // <4>
console.log({sncf: sncf, foo: 'bar'}); // <5>
