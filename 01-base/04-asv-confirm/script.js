/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let age, gender, town;

(function function1() {
    age = prompt('what is your age?');
    gender = prompt('what is your gender?');
    town = prompt('which town do you live in?');
    if (confirm('so we have: age: '+ age + ', gender:' + gender+ ',town: ' + town + '. Does that sound right?'))
    {}
    else
    {function1()}
    // your code here

})();
