/**
 * Creates an array of elements split into groups the length of size. If array can't be
 * split, the final chunk will be the remaining elements
 *
 * @param array: The array to process
 * @param size: The length of each chunk
 */

var forEach = require('../collection/_forEach');

function chunk(array, size) {
    if (size === 0) {
        return array;
    }

    var result = [];

    forEach(array, function(value, index) {
        var temp = [];

        while(index % size !== 0) {
            temp.push(value);
        }
        result.push(temp);
    });

    console.log(result);
    return result;
}

module.exports = chunk;