/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    for (i=1; i<=100;i++)
    {if (Math.trunc(i/15) == i/15)
    {console.log('fizzbuzz')}
    else if (Math.trunc(i/5) == i/5)
    {console.log('buzz')}
    else if (Math.trunc(i/3) == i/3)
    {console.log('fizz')}
    else
    console.log(i)
    }

})();
