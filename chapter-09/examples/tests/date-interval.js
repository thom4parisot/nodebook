import { createElement } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DateInterval from '../modules/date-interval.jsx';// <1>

describe('<DateInterval />', () => {
  const element = createElement(DateInterval);

  it('affiche un élément <time>', () => {               // <2>
    const component = shallow(element);                 // <3>

    expect(component.find('time')).to.have.length(1);   // <4>
  });

  it('la propriété tickDate influence la classe HTML', () => {
    const OK_CLASS = ['pair', 'impair'];
    const component = shallow(element);                 // <5>
    const {tickData} = component.state();               // <6>

    const time = tickData.now.getTime();
    expect(time).to.be.closeTo(Date.now(), 3);          // <7>
    expect(tickData.className).to.be.oneOf(OK_CLASS);   // <8>
  });
});
