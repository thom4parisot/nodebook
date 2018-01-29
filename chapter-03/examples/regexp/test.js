const cedex = `CODEPOSTAL VILLE CEDEX
33900 Bordeaux Cedex 9
33074 BORDEAUX CEDEX
33700 MERIGNAC Cidex 40`;

const postcode_tester = /^\d{5}\s/m;

if (postcode_tester.test(cedex)) {
  console.log(cedex.match(/^(\d{5})\b/gm));
}
