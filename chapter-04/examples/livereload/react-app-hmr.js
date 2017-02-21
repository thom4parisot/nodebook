import { createElement } from 'react';
import ReactDOM from 'react-dom';
import ButtonCount from './button-count.jsx';

ReactDOM.render(
  createElement('div', {}, [
    createElement(ButtonCount),
    createElement(ButtonCount),
    // createElement(ButtonCount),
  ]),
  document.querySelector('#app')
);
