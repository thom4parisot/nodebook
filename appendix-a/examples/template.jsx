'use strict';

const React = require('react');

const BookList = ({books=[]}) => {
  return (<ul>
    {books.map((bookName, i) => (
      <li key={i}>{bookName}</li>
    ))}
  </ul>);
}

module.exports = ({title, books}) => {
  return (
    <html>
      <head>
        <title>{title || 'Template demo'}</title>
      </head>
      <body>
        <BookList books={books} />
      </body>
    </html>
  );
};
