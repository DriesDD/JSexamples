/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

        let numero = Math.ceil(Math.random() * 100);
        let guess = -1
        let guesscount = 0

        function guesser() {
            if (guess < 0) {
                guess = prompt("Please guess a number from 1 to 100");
                guesscount +=1;
                guesser()
            } else {
                if (guess == numero) {
                    alert('That is exactly right! And you only needed ' + guesscount + ' attempts.' )
                    }
                    else {
                        if (guess < numero) {
                            guess = prompt("You need to go higher! New attempt:");
                            guesscount +=1;
                            guesser()
                        } else {
                            if (guess > numero) {
                                guess = prompt("You need to go lower! New attempt:"); guesscount +=1; guesser()
                            }
                        }
                    }

                }
            }
        guesser()

        })();