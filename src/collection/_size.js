/**
 *  Get the size of `collection` by returning its length for array
 *  or the number of enumerable properties for objects
 *
 * @param collection
 * @returns {number} Returns the collection size
 */
function size(collection) {
    if (typeof collection === 'array' || typeof collection === 'string') {
        return collection.length;
    }

    if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
}

module.exports = size;