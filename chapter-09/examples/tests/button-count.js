import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import ButtonCount from '../livereload/button-count.jsx';

chai.use(chaiEnzyme());

describe('<ButtonCount />', () => {
  it('should increment state on click', () => {       // <1>
    const component = shallow(<ButtonCount />);
    component.simulate('click');                      // <2>

    expect(component).to.have.state('clickCount', 1); // <3>
  });
});
