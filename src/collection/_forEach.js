/**
 * Iterates over elements of collection invoking callback for each element.
 * The callback is invoked with three argument (value, index|key, collection)
 *
 * @param collection
 * @param callback
 */
function forEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (var i = 0, len = collection.length; i < len; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        var keys = Object.keys(collection);

        for (var i = 0, len = keys.length; i < len; i++) {
            callback(collection[keys[i]], keys[i], collection);
        }
    }
}

module.exports = forEach;