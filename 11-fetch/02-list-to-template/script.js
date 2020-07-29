/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function $(x) {
        return document.getElementById(x);
    }

    let eli, eh4, eem, estrong, ep, etext

    document.getElementById('run').onclick = () => {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                for (i = 0; i <= data.length; i++)

                { //elements
                    eli = document.createElement("li");
                    eli.setAttribute("class", "hero");
                    eh4 = document.createElement("h4");
                    eh4.setAttribute("class", "title");
                    estrong = document.createElement("strong");
                    estrong.setAttribute("class", "name");
                    eem = document.createElement("em");
                    eem.setAttribute("class", "alter-ego");
                    ep = document.createElement("em");
                    ep.setAttribute("class", "powers");

                    //structure
                    eh4.appendChild(estrong);
                    eh4.appendChild(eem);
                    eli.appendChild(eh4);
                    eli.appendChild(ep);

                    //dynamic content
                    etext = document.createTextNode(data[i].name);
                    estrong.appendChild(etext);
                    etext = document.createTextNode(data[i].alterEgo);
                    eem.appendChild(etext);
                    etext = document.createTextNode(data[i].abilities);
                    ep.appendChild(etext);
                    $('target').appendChild(eli);
                };
            });
    }

})();