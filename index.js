'use strict';

var randomNatural = require('random-natural');

module.exports = function () {
  return randomNatural(2, 9).toString()
    + randomNatural(0, 8).toString()
    + randomNatural(0, 9).toString();
};
