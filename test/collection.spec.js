var expect = require('chai').expect;

var forEach = require('../src/collection/_forEach');
var each = require('../src/collection/_each');
var size = require('../src/collection/_size');

describe('COLLECTION', function() {
    describe('_.forEach', function() {
        it('should iterate through an array and add all values', function() {
            var sum = 0;
            var array = [1, 2, 3, 4, 5, 6];
            var isArray = false;
            forEach(array, function(value, index, collection) {
                sum += value;
                isArray = Array.isArray(collection);
            });

            expect(sum).to.equal(21);
            expect(isArray).to.be.true;
        });

        it('should iterate through an object and add all values', function() {
            var sum = 0;
            var object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
            var isObject = false;

            forEach(object, function(value, key, collection) {
                sum += value;
                isObject = typeof collection === 'object';
            });

            expect(sum).to.equal(21);
            expect(isObject).to.be.true;
        });
    });

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