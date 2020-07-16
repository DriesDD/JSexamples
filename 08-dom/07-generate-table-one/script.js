/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let html = "<table>"
    for (i=0;i<data.length;i++)
        {html += "<tr> <td>" +data[i] + "</td> </tr>"}
    html += "</table>"
    let table = document.createElement("tr");    
    document.getElementById("target").innerHTML = html;
})();
