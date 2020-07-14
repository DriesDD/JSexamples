/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let e = days[d.getDay()];
e += ' ' + d.getDate() + ' ';
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
e += months[d.getMonth()];
e += ' ' + d.getFullYear() + ', ' + d.getHours() + 'h' + d.getMinutes()

document.getElementById("target").innerHTML = e;

})();
