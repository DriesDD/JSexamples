/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

function $(x) {return document.getElementById(x);}
function update() {$('target').innerText = $('part-one').innerText + $('part-two').innerText + $('part-three').innerText + $('part-four').innerText};


$('part-one').onclick = () => {$('part-one').innerText = '+' + (Number($('part-one').innerText) + 1);
update();}

$('part-two').onclick = () => {$('part-two').innerText = ('00' + (Number($('part-two').innerText) + 1)).substr(-2,2);
update();}

$('part-three').onclick = () => {$('part-three').innerText = ('00' + (Number($('part-three').innerText) + 1)).substr(-2,2);
update();}

$('part-four').onclick = () => {$('part-four').innerText = ('00' + (Number($('part-four').innerText) + 1)).substr(-2,2);
update();}

})();
