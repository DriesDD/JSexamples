/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function $(x) {return document.getElementById(x);}
    function update() {$('target').innerText = String(
        '+' + $('part-one').value 
        + ('00'+($('part-two').value)).substr(-2,2)
        + ('00'+($('part-three').value)).substr(-2,2)
        + ('00'+($('part-four').value)).substr(-2,2) )};

    rolls = ['part-one', 'part-two', 'part-three','part-four']
    setInterval(repeater,40);
    function repeater () {rolls.forEach(tick)};
    function tick (item) 
    {   x = item;
        if (x != 0) {
        $(x).value =Number($(x).value) + 1;
        if ($(x).value > Number($(x).getAttribute('data-max'))) {$(x).value = $(x).getAttribute('data-min')}
        if ($(x).value < Number($(x).getAttribute('data-min'))) {$(x).value = $(x).getAttribute('data-min')}
        update();}
    };

    document.getElementById('fix-part-one').onclick = () => {rolls[0] = 0}
    document.getElementById('fix-part-two').onclick = () => {rolls[1] = 0}
    document.getElementById('fix-part-three').onclick = () => {rolls[2] = 0}
    document.getElementById('fix-part-four').onclick = () => {rolls[3] = 0}

})();