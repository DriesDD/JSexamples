/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function $(x) {
        return document.getElementById(x);
    }

    var textWrapper = $("target");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    for (i = 0; i < document.getElementsByClassName("letter").length; i++) {
        document.getElementsByClassName("letter")[i].style = "opacity:0"
    }

    /*
    j = 500
    let timings = []
    let actions = []
    for (i=0 ; i < document.getElementsByClassName("letter").length; i++)
    {actions.push(i);
     timings.push(j);
     j += Math.random()*100;
     setTimeout(document.getElementsByClassName("letter")[actions[i]].style = "opacity:0.5",timings[i]);
    }
    */

    let time = 500
    let j = 0
    iterate();
    function iterate() {
        document.getElementsByClassName("letter")[j].style = "opacity:1", time
        j += 1;
        time = 50 + Math.pow(Math.random()*15,2) ;
        if (j < document.getElementsByClassName("letter").length) {
            setTimeout(iterate, time)
        };
    }




})();