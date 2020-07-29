/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let x;
    function $(x) {
        return document.getElementById(x);
    }
    document.getElementById('run').onclick = () => {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                    data.push({id: (data.length+1), name: $('hero-name').value, alterEgo: $('hero-alter-ego').value, abilities:[$('hero-powers').value]});
                    console.log(data)
                })
            }
    })();