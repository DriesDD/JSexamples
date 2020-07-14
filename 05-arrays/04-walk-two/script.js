/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: array traversal (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


var fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
];

document.getElementById('run').onclick = function() {walk() };

function walk() {
fruits.forEach(function(item, index, array) {
    console.log(item, index)})
};