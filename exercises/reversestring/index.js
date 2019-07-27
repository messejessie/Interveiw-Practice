// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//turn string into array

//solution One:
// revers
// function reverse(str) {
//     //how do I reverse a string?
//     let arr = str.split('')
//     // reverse 
//     arr.reverse();
//     //return
//     return arr.join('');
    
// }

//Solution Two  - 4 loop

// function reverse(str){
//     let reversed = '';
//     for(let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;

// }

//solution 3
function reverse(str){
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

module.exports = reverse;
