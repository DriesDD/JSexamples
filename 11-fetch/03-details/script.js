/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
                        x = Number($('hero-id').value);
                        $('target').innerText = data[x].name;
                    })

                }

        })();