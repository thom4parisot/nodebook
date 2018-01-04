import { createElement } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DateInterval from '../modules/date-interval.jsx';    // <1>

describe('<DateInterval />', () => {
  it('should render a time element', () => {                // <2>
    const component = shallow(createElement(DateInterval)); // <3>

    expect(component.find('time')).to.have.length(1);       // <4>
  });

  it('should populate props.tickData with now+className properties', () => {
    const component = shallow(createElement(DateInterval)); // <5>
    const {tickData} = component.state();                   // <6>

    expect(tickData.now.getTime()).to.be.closeTo(Date.now(), 3);  // <7>
    expect(tickData.className).to.be.oneOf(['pair', 'impair']);   // <8>
  });
});
