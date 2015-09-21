'use strict';

var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      items: ['Node.js', 'CSS maintenables', 'Open Sky']
    }
  },
  render: function(){
    var items = [];

    this.state.items.forEach(function(item, i){
      items.push(<li key={i}>{item}</li>);
    });

    return (
      <html>
        <head>
          <title>{this.props.title || 'Template demo'}</title>
        </head>
        <body>
          <ul>{items}</ul>
        </body>
      </html>
    );
  }
});
