/**
 *  Adds two numbers
 * @param augend: The first number in an addition
 * @param addend: The second number in an addition
 * @returns {*}: The total
 */
function add(augend, addend) {
    var isAugendString = typeof augend === 'string';
    var isAddendString = typeof addend === 'string';
    var isAugendUndefined = augend === undefined;
    var isAddendUndefined = addend === undefined;

    if (isAugendString || isAddendString || isAugendString && isAddendString) {
        return;
    }

    if (isAugendUndefined && isAddendUndefined) {
        return 0;
    }

    if (isAugendUndefined) {
        return addend;
    }

    if (isAddendUndefined) {
        return augend;
    }

    return augend + addend;
}

module.exports = add;