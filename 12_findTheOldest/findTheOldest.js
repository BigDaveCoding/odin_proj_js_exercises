const findTheOldest = function(obj) {

    let arr_birth = obj.map((x) => x.yearOfBirth);

    let arr_death = obj.map((x) => x.yearOfDeath);

    let ages = [];

    arr_birth.map((x, i) => {
        if (arr_death[i] === undefined) {
            ages.push(new Date().getFullYear() - x);
        } else {
            ages.push(arr_death[i] - x);
        }
    });

    let maxIdx = ages.indexOf(Math.max(...ages));

    return obj[maxIdx];


};

// Do not edit below this line
module.exports = findTheOldest;
