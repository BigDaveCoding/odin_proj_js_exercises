const add = function(n_1, n_2) {
  res = n_1 + n_2;
  return res;
	
};

const subtract = function(n_1, n_2) {
  res = n_1 - n_2;
  return res;
	
};

const sum = function(arr) {
  let res = 0;
  const result = arr.reduce((total, curr) => total + curr, 0);

  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((total, current) => total * current, 1);

  return result;

};

const power = function(n, pow) {
  let result = Math.pow(n, pow);

  return result;
	
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
