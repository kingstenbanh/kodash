var forEach = require('../collection/_forEach');

/**
 * Converts all elemens in array into a string separated by separator
 * @param array: The array to convert
 * @param separator: The element separator
 */
function join(array, separator) {
    separator = separator || ',';
    var result = '';

    forEach(array, function(element, index) {
        result += element + separator;
    });

    return result.substr(0, result.length - 1);
}

module.exports = join;