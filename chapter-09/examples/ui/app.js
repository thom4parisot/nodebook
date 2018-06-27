const {createElement} = require('react');
const {render} = require('react-dom');
const {BaseButton} = require('./Buttons.jsx');

const element = createElement(
  BaseButton,
  { variant: 'large' },
  'Bonjour Monde !'
);

render(element, document.querySelector('#app'));
