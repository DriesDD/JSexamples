/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function pad(n){return n<10 ? '0'+n : n}

(function() {

document.getElementById('run').onclick = function(){
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const y = document.getElementById('year').value;
let m = 'The spooky months of the year ' + y + ' are: ';
let d = new Date();
for (i = 1; i< 13; i++)
{ d = new Date(y+'-'+pad(i)+'-13');
    if (d.getDay() == 5)
{m += '\n' + months[d.getMonth()] }
}
alert (m);

}

})();
