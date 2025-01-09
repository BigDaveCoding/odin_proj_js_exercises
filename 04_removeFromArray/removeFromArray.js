const removeFromArray = function(array, ...remove) {
    let new_array = array.filter((element) => !remove.includes(element));
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
