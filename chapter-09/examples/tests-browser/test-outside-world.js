import { expect } from 'chai';
import getLinkElementContent from '../test-outside-world.js';

describe('getLinkElementContent', () => {
  before(() => {
    fixture.setBase('examples/tests-browser/fixtures'); // <1>
  });

  it('fetches dependencies from remote package.json', () => {
    const [link] = fixture.load('link-package.html');   // <2>

    return getLinkElementContent(link).then(deps => {   // <3>
      expect(deps).to.contain.all.keys(                 // <4>
        '@babel/core', 'react', 'enzyme'
      );
    });
  });
});
