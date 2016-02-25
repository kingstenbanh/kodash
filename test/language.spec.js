var expect = require('chai').expect;

var isString = require('../src/language/_isString');

describe('LANGUAGE', function() {
    describe('_.isString', function() {
        it('should return true for `abc`', function() {
            expect(isString('abc')).to.be.true;
        });

        it('should return false for 1', function() {
            expect(isString(1)).to.be.false;
        });

        it('should return false for []', function() {
            expect(isString([])).to.be.false;
        });
    });
});