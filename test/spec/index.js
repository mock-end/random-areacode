'use strict';

var expect = require('chai').expect;


describe('random-areacode: ', function () {

  var randomAreaCode = require('../../');

  it('randomMobile()', function () {

    var count = 100;

    while (count--) {
      expect(randomAreaCode()).to.be.a('string');
      expect(randomAreaCode()).to.have.length(3);
      expect(randomAreaCode()).to.be.match(/^[2-9][0-8][0-9]$/);
    }
  });
});
