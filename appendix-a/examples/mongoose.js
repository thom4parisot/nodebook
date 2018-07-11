'use strict';

// docker run -ti --rm -p 0.0.0.0:27017:27017 mongo:3.1
// MONGODB_URL=mongodb://... node npm-mongoose.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DEFAULT_URL = 'mongodb://localhost:27017/nodebook';
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL || DEFAULT_URL);

const BookSchema = new Schema({
  id: Schema.ObjectId,
  title: String,
  created_at: { type: Date, default: Date.now }
});

BookSchema.path('title').set(title => title.trim());

const Book = mongoose.model('Book', BookSchema);

Promise.all([
  new Book({ title: 'Node.js' }).save(),
  new Book({ title: 'CSS maintenables' }).save(),
  new Book({ title: 'Open Sky' }).save()
])
.then(records => {
  console.log('+%d enregistrements', records.length); // <1>
  mongoose.disconnect();
});
