import isOdd from '../test-branches.js'
import {expect} from 'chai';

describe('isOdd', () => {
  it('jette une exception si le paramètre n\'est pas un nombre', () => {
    expect(() => isOdd(NaN)).to.throw(/devrait être un nombre/);
  });

  it('renvoie true si 3 est un chiffre impair', () => {
    expect(isOdd(3)).to.equal(true);
  });

  it('renvoie false si 2 est un nombre pair', () => {
    expect(isOdd(2)).to.equal(false);
  });
});
