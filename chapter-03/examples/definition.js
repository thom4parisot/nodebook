'use strict';

// <1>
const baseUrl = 'https://oncletom.io/node.js';
const imageUrl = `${baseUrl}/cover.png`;

// <2>
const docBody = document.body;
const createImage = (src, element) => {
  const img = document.createElement('img');
  img.src = src;

  return element.appendChild(element);
}

// <3>
fetch(imageUrl)
  .then(response => response.blob())
  .then(blob => URL.createObjectURL(blob))
  .then(objectUrl => createImage(objectUrl, docBody));

// <4>
module.exports = createImage;
