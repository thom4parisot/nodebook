'use strict';

var fs = require('fs');
var http = require('http');
var path = require('path');

module.exports = {
  /**
   *
   * @param config
   * @param onRequest
   * @returns {*}
   */
  request: function request(config, onRequest){
    var sources = this.getProviderFromConfig(config.provider);

    this.requestFromURL(sources[config.source], onRequest);
  },
  /**
   *
   * @param url
   * @param onRequest
   */
  requestFromURL: function requestFromURL(url, onRequest){
    http.request(url, onRequest).end();
  },
  /**
   *
   * @param responseStream
   * @param filename
   * @returns {boolean}
   */
  saveResponseTo: function saveResponseTo(responseStream, filename){
    if (!filename){
      return false;
    }

    var file = fs.createWriteStream(filename);

    responseStream.pipe(file);
  },
  /**
   *
   * @param providerId
   * @returns {*}
   */
  getProviderFromConfig: function getProviderFromConfig(providerId){
    var provider = require('../package.json').config[providerId];

    if (!provider){
      throw new TypeError('Provider not found, was ' + providerId);
    }

    return provider;
  }
};
