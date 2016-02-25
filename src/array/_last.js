/**
 * Get the last element of array
 *
 * @param array: The array to query
 * @returns {*}: Returns the last element of array
 */
function last(array) {
    return !!array && array[array.length];
}

module.exports = last;