/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var set = [];
while (set.length < 10)
{set.push(Math.ceil(Math.random()*100))};
for (i=1; i < 11; i++)
{document.getElementById('n-'+i).innerHTML = set[i-1]}

document.getElementById('min').innerHTML = Math.min.apply('', set);
document.getElementById('max').innerHTML = Math.max.apply('', set);
document.getElementById('sum').innerHTML = set.reduce((a,b)=>a+b);
document.getElementById('average').innerHTML = (set.reduce((a,b)=>a+b)/set.length);

})();
