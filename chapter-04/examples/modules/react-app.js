import { createElement } from 'react';
import ReactDOM from 'react-dom';
import DateInterval from './date-interval.jsx';

ReactDOM.render(                                  // <1>
  createElement(DateInterval, {interval: 1000}),  // <2>
  document.querySelector('#app')                  // <3>
);
