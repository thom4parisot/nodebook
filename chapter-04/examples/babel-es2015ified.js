"use strict";

var getOS = function getOS(userAgent) {
  var _userAgent$match = userAgent.match(/\(([^;]+)\s?;\s?([^\)]+)\)/),
      os = _userAgent$match[1],
      version = _userAgent$match[2];

  return { os: os, version: version };
};

var userAgent = window.navigator.userAgent; // <1>

console.log(getOS(userAgent)); // <2>

