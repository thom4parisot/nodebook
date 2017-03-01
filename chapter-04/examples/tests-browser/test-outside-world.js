import { expect } from 'chai';
import getLinkElementContent from '../test-outside-world.js';

describe('getLinkElementContent', () => {
  before(() => fixture.setBase('examples/tests-browser/fixtures')); // <1>

  it('follows an HTML link to a package.json and get its dependencies', () => {
    const [link] = fixture.load('link-package.html');               // <2>

    return getLinkElementContent(link).then(deps => {               // <3>
      expect(deps).to.contain.all.keys('babel', 'react', 'enzyme'); // <4>
    });
  });
});
