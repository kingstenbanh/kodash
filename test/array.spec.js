var expect = require('chai').expect;

var chunk = require('../src/array/_chunk');
var initial = require('../src/array/_initial');
var last = require('../src/array/_last');
var uniq = require('../src/array/_uniq');

describe('ARRAY', function() {
    describe('_.chunk', function() {
        xit('should return the entire array if size equals 0', function() {
            var array = [1, 2, 3, 4];
            var result = chunk(array, 0);

            expect(result.length).to.equal(array.length);
        });

        xit('should return an array with 3 sub arrays', function() {
            var array = [1, 2, 3, 4, 5, 6];
            var size = 2;
            var result = chunk(array, size);

            expect(result.length).to.equal(array.length / size);
        });
    });

    describe('_.initial', function() {
        it('should return all but the last element of array', function() {
            var array = [1, 2, 3, 4];
            var result = initial(array);

            expect(result[array.length - 1]).to.be.undefined;
        });
    });

    describe('_.last', function() {
        it('should return undefined for empty array', function() {
            var result = last([]);
            expect(result).to.be.undefined;
        });

        it('should return the last element of an array', function() {
            var array = [1, 2, 3, 4, 5];
            var result = last(array);
            expect(result).to.equal(array[array.length]);
        });
    });

    describe('_.uniq', function() {
        it('should return an empty array if empty array is inspected', function() {
            expect(uniq([]).length).to.equal(0);
        });

        it('should return a duplicate-free version of an array', function() {
            var array = [1, 1, 5, 2];
            var result = uniq(array);

            expect(result.length).not.equal(array.length);
        });
    });
});