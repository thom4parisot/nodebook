'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

module.exports = {
  /**
   *
   * @param config
   * @param onRequest
   * @returns {*}
   */
  request (config, onRequest){
    const sources = this.getProviderFromConfig(config.provider);

    this.requestFromURL(sources[config.source], onRequest);
  },
  /**
   *
   * @param url
   * @param onRequest
   */
  requestFromURL (url, onRequest){
    http.request(url, onRequest).end();
  },
  /**
   *
   * @param responseStream
   * @param filename
   * @returns {boolean}
   */
  saveResponseTo (responseStream, filename){
    if (!filename){
      return false;
    }

    const file = fs.createWriteStream(filename);

    responseStream.pipe(file);
  },
  /**
   *
   * @param providerId
   * @returns {*}
   */
  getProviderFromConfig(providerId){
    const provider = require('../package.json').config[providerId];

    if (!provider){
      throw new TypeError(`Provider not found, was ${providerId}`);
    }

    return provider;
  }
};
