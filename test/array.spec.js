var expect = require('chai').expect;

var chunk = require('../src/array/_chunk');
var last = require('../src/array/_last');

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
});