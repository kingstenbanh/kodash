/**
 * Checks if value is classified as a String primitive or object
 * @param value: The value to check
 * @returns {boolean}: Returns true if value is correctly classified, else false
 */
function isString(value) {
    return value && typeof value === 'string';
}

module.exports = isString;