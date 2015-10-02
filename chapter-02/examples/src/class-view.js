'use strict';

class View {
  constructor(config) {
    this.config = Object.assign({}, config);
  }

  render (data) {
    throw new Error('Extend the View class to render content.')
  }

  static removeDuplicates (char, content) {
    return content.replace(new RegExp(`[${char}]{2,}`), char);
  }
}

module.exports = View;
