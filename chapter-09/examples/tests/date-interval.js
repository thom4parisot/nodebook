import { createElement } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DateInterval from '../modules/date-interval.jsx';// <1>

describe('<DateInterval />', () => {
  const element = createElement(DateInterval);

  it('affiche un élément <time>', () => {               // <1>
    const component = shallow(element);                 // <2>

    expect(component.find('time')).to.have.length(1);   // <3>
  });

  it('la propriété tickDate influence la classe HTML', () => {
    const OK_CLASS = ['pair', 'impair'];
    const component = shallow(element);                 // <1>
    const {tickData} = component.state();               // <2>

    const time = tickData.now.getTime();
    expect(time).to.be.closeTo(Date.now(), 3);          // <3>
    expect(tickData.className).to.be.oneOf(OK_CLASS);   // <4>
  });
});
