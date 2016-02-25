var expect = require('chai').expect;

var size = require('../src/collection/_size');

describe('COLLECTION', function() {
    describe('_.size', function() {
        it('should return a correct length for an array', function() {
            var length = size([1, 2, 3, 4]);
            expect(length).to.equal(4);
        });

        it('should return a correct number of enumerable properties for objects', function() {
            var count = size({ 'a': 1, 'b': 2, 'c': 3 });
            expect(count).to.equal(3);
        });

        it('should return a correct length for a string', function() {
            var length = size('kingsten');
            expect(length).to.equal(8);
        });
    });
});