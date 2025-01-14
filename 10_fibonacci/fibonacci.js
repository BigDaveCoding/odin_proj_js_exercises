const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    if (index <= 1) return parseInt(index);
    return parseInt(fibonacci(index - 1) + fibonacci(index - 2));

};

// Do not edit below this line
module.exports = fibonacci;
