import $ from 'jquery';
import timerFn from './timer.js';                   // <4>

const displaySeconds = (tickData, dateElement) => { // <5>
  const {className, now} = tickData;

  $(dateElement)                                    // <6>
    .attr('class', className)
    .attr('datetime', now.toISOString())
    .text(now.toLocaleTimeString());
};

$(document).ready(() => {
  const dateElements = $('time').get();             // <1>
  const onTick = tickData => {                      // <2>
    dateElements.forEach(el => displaySeconds(tickData, el));
  };

  timerFn({ interval: 1000, onTick });              // <3>
});
