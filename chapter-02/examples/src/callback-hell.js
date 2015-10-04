'use strict';

let fs = require('fs');
let join = require('path').join;

let files = new Set(['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'examples', 'package.json');
})).values();

fs.readFile(files.next().value, (err, chapter02Buffer) => {
  if (err) {
    throw Error(err);
  }

  fs.readFile(files.next().value, (err, chapter01Buffer) => {
    if (err) {
      throw Error(err);
    }

    fs.readFile(files.next().value, (err, chapter03Buffer) => {
      if (err) {
        throw Error(err);
      }
      
      let mergedDependencies = Object.assign(
        {},
        JSON.parse(chapter01Buffer).dependencies,
        JSON.parse(chapter02Buffer).dependencies,
        JSON.parse(chapter03Buffer).dependencies
      );

      console.log(Object.keys(mergedDependencies).length);  // <1>
    });
  })
});
