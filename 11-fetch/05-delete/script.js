/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
                    data.splice($('hero-id').value-1, 1)
                    console.log(data)
                })
            }
    })();