// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Tricks 
//toString() === example
//const mynumber = 200
//mynNumber.toString().split('').join('') 
// allows us to use the reserval tech shown so far. 

//Math.sign() passes in a number thats positive and makes it one or negative brings out negative one
//parseInt(myNumber.toString()) === to turn it back into a number
function reverseInt(n) {
    const reverse = n
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(reverse) * Math.sign(n);
}

module.exports = reverseInt;
