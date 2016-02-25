var expect = require('chai').expect;

var add = require('../src/math/_add.js');

describe('MATH', function() {
    describe('_.add', function() {
        it('should only accept numbers', function() {
            var stringNumber = add('a', 1);
            var numberString = add(1, 'a');
            var stringString = add('a', 'b');

            expect(stringNumber).to.be.undefined;
            expect(numberString).to.be.undefined;
            expect(stringString).to.be.undefined;
        });

        it('should return augend if addend is undefined', function() {
            var result = add(1);
            expect(result).to.equal(1);
        });

        it('should return addend if augend is undefined', function() {
            var result = add(undefined, 1);
            expect(result).to.equal(1);
        });

        it('should return a sum of two numbers', function() {
            var sum = add(1, 2);
            expect(sum).to.equal(3);
        });
    });
});