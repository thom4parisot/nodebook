'use strict';

const React, { Component } = require('react');

class BookList extends Component {
  render() {
    return (<ul>
      {this.props.books.map((bookName, i) => (
        <li key={i}>{bookName}</li>
      ))}
    </ul>);
  }
}

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: React.PropTypes.array,
};

const App = (props) => {
  return (
    <html>
      <head>
        <title>{props.title || 'Template demo'}</title>
      </head>
      <body>
        <BookList books={props.books} />
      </body>
    </html>
  );
};

module.exports = App;
