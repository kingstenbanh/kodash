/**
 * Gets all but the last element of array
 * @param array: The array to query
 * @returns {Array}: Returns the slice of array;
 */
function initial(array) {
    var result = array.slice(0);
    result.pop();
    return result;
}

module.exports = initial;