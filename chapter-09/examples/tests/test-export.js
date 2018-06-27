import countWords from '../test-export.js'
import {expect} from 'chai';

describe('countWords', () => {
  it('identifie trois mots séparés par un espace', () => {
    expect(countWords('un deux trois')).to.equal(3);
  });

  it('ignore les nombres et la ponctuation', () => {
    expect(countWords('un 2 . trois')).to.equal(2);
  });

  it('compte les mots-composés comme un seul mot', () => {
    expect(countWords('Un. Vingt-deux. Trois.')).to.equal(3);
  });
});
