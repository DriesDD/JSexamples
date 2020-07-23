/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//old attempt

/*
(() => {
    let post = 1

    function getPosts() {
        setTimeout(callback, 1200);
        post = window.lib.getPosts(callback);
    };

//I think this should return an article instead of a post id. Not sure how to change it.

    function cb() {
        console.log(post);
        console.log(window.utils.generatePost(post));

    };

    getPosts();

    document.getElementById('run').onclick = () => {
        getPosts();
    



    
};



})();

*/

(() => {
    document.getElementById("run").onclick = () => {
      window.lib.getPosts((error,article) => {
         console.log(article);
      });
    };
  })();