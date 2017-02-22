const {createElement} = require('react');
const {render} = require('react-dom');
const {BaseButton} = require('./Buttons.jsx');

render(
  createElement(BaseButton, { variant: 'large' }, 'Bonjour Monde !'),
  document.querySelector('#app')
);
