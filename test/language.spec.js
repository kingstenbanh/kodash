var expect = require('chai').expect;

var isArray = require('../src/language/_isArray');
var isString = require('../src/language/_isString');

describe('LANGUAGE', function() {
    describe('_.isArray', function() {
        it('should return true for [1, 2, 3]', function() {
            expect(isArray([1, 2, 3])).to.be.true;
        });

        it('should return false for `abc`', function() {
            expect(isArray('abc')).to.be.false;
        });

        it('should return false for {}', function() {
            expect(isArray({})).to.be.false;
        });
    });

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