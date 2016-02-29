var expect = require('chai').expect;

var gt = require('../src/language/_gt');
var gte = require('../src/language/_gte');
var isArray = require('../src/language/_isArray');
var isString = require('../src/language/_isString');
var lt = require('../src/language/_lt');
var lte = require('../src/language/_lte');

describe('LANGUAGE', function() {
    describe('_.gt', function() {
        it('should return true for 3 > 1', function() {
           expect(gt(3, 1)).to.be.true;
        });

        it('should return false for 3 > 3', function() {
            expect(gt(3, 3)).to.be.false;
        });

        it('should return true for 1 > 3', function() {
            expect(gt(1, 3)).to.be.false;
        });
    });

    describe('_.gte', function() {
        it('should return true for 3 >= 1', function() {
            expect(gte(3, 1)).to.be.true;
        });

        it('should return false for 3 >= 3', function() {
            expect(gte(3, 3)).to.be.true;
        });

        it('should return true for 3 > 1', function() {
            expect(gte(1, 3)).to.be.false;
        });
    });

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

    describe('_.lt', function() {
        it('should return true for 1 < 3', function() {
            expect(lt(1, 3)).to.be.true;
        });

        it('should return false for 3 < 3', function() {
            expect(lt(3, 3)).to.be.false;
        });

        it('should return true for 3 < 1', function() {
            expect(lt(3, 1)).to.be.false;
        });
    });

    describe('_.lte', function() {
        it('should return true for 1 <= 3', function() {
            expect(lte(1, 3)).to.be.true;
        });

        it('should return false for 3 <= 3', function() {
            expect(lte(3, 3)).to.be.true;
        });

        it('should return true for 3 <= 1', function() {
            expect(lte(3, 1)).to.be.false;
        });
    });
});