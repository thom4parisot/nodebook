'use strict';

const View = require('../class-view');

class HTMLView extends View {
  constructor(options) {
    super(Object.assign({doctype: 'html'}, options));

    this.doctype = this.config.doctype;
  }

  render(data) {
    return `<!DOCTYPE ${this.doctype}>
<html>
  <title>${data.title}</title>
  <body>
    <h1>${data.title}</h1>

    <main>${data.content}</main>
  </body>
</html>`;
  }
}

class TextView extends View {
  render(data) {
    const underline = '#'.repeat(data.title.length + 2);

    return `# ${data.title}
${underline}

${data.content.trim()}`;
  }
}

const viewData = {title: 'Node.js', content: ' Hello World! '};

console.log(new HTMLView().render(viewData)); // <1>
console.log(new TextView().render(viewData)); // <2>
