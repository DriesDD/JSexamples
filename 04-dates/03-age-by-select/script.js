/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function pad(n){return n<10 ? '0'+n : n}

let age;

document.getElementById('run').onclick = function() {getage()};

function getage() {
let a = (new Date()).valueOf();
let m = pad(document.getElementById("dob-month").value);
let b = (new Date((document.getElementById("dob-year").value) + '-' + m + '-' + (document.getElementById("dob-day").value))).valueOf();
age = Math.floor((a- b)/31536000000);
alert(age);
};