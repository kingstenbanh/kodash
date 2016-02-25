/**
 * Creates an array of elements split into groups the length of size. If array can't be
 * split, the final chunk will be the remaining elements
 *
 * @param array: The array to process
 * @param size: The length of each chunk
 */

var forEach = require('../collection/_forEach');

function chunk(array, size) {

    var result = [];
    var temp = [];

    forEach(array, function(value, index) {
        temp.push(value);
        if (index + 1 % size == 0) {
            result.push(temp);
            temp = [];
        }
    });

    return result;
}

module.exports = chunk;