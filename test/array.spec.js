var expect = require('chai').expect;

var chunk = require('../src/array/_chunk');

describe('ARRAY', function() {
    describe('_.chunk', function() {
        it('should return the entire array if size equals 0', function() {
            var array = [1, 2, 3, 4];
            var result = chunk(array, 0);

            expect(result.length).to.equal(array.length);
        });

        it('should return an array with 3 sub arrays', function() {
            var array = [1, 2, 3, 4, 5, 6];
            var size = 2;
            var result = chunk(array, size);

            expect(result.length).to.equal(array.length / size);
        });
    });
});