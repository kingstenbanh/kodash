var forEach = require('../collection/_forEach');


function uniq(array) {
    var result = [];

    forEach(array, function(value) {
        !result.indexOf(value) && result.push(value);
    });

    return result;
}

module.exports = uniq;