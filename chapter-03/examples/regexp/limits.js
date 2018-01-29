const postcode = '75015 Paris';
const cedex = `CODEPOSTAL VILLE CEDEX
33900 Bordeaux Cedex 9
33074 BORDEAUX CEDEX
33700 MERIGNAC Cidex 40`;

const nogroup = /^[0-9]{5} [a-z0-9' -]+/i;
const group = /^([0-9]{5}) [a-z0-9' -]+/i;

// avec ou sans groupe de capture
console.log(postcode.match(nogroup));         // <1>
console.log(postcode.match(group));           // <2>

// mode multiligne avec ou sans option globale
console.log(cedex.match(/^([0-9]{5})/im));    // <3>
console.log(cedex.match(/^([0-9]{5})/gim));   // <4>
