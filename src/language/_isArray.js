/**
 * Chick if value is classified as an Array object
 * @param array: The value to check
 * @returns {boolean}: Returns true if value is correctly classified, else false.
 */

function isArray(array) {
    return array && Array.isArray(array);
}

module.exports = isArray;