/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

function $(x) {return document.getElementById(x);}

var textWrapper = $("target");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let k = 0
function waves() {
for (i=0 ; i < document.getElementsByClassName("letter").length; i++)
{j = Math.round((3+Math.sin((k+i)/4))*8);
document.getElementsByClassName("letter")[i].style = "font-size:" +j + "px"};
k +=1}

setInterval(waves,100);

})();