var expect = require('chai').expect;

var now = require('../src/date/_now');

describe('DATE', function() {
    describe('_.now', function() {
        it('should return the current timestamp in the number of milliseconds', function() {
           expect(now()).to.equal(Date.now());
        });
    });
});