'use strict';

var Promise = require('bluebird');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/nodebook');

var BookSchema = new Schema({
  id: Schema.ObjectId,
  title: String,
  created_at: { type: Date, default: Date.now }
});

BookSchema.path('title').set(function (title) {
  return title.trim();
});

var Book = mongoose.model('Book', BookSchema);

Promise.all([
  new Book({ title: 'Node.js' }).save(),
  new Book({ title: 'CSS maintenables' }).save(),
  new Book({ title: 'Open Sky' }).save()
])
.then(function(){
  console.log('Enregistrements créés.');
  mongoose.disconnect();
});
