/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let count = 0

    document.getElementById("pass-one").addEventListener("input",function(){
        console.log("a");
    if (document.getElementById("pass-one").value.length > 7 && document.getElementById("pass-one").value.match(/\d\w*\d/g))
    { document.getElementById("validity").innerText = "OK" }
    else
    { document.getElementById("validity").innerText = "Not OK" }  
    })

})();