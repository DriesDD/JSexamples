/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: loading articles and comments
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function Postgetter(error, articles) {
        if (error) {
            console.error(error);
            return;
        }

        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];

            window.lib.getComments(article.id, (error, comments) => {
                if (error) {
                    console.error(error);
                } else {
                    article['comments'] = comments;
                }
            });
        }
        console.log(articles);
    }

    document.getElementById('run').onclick = () => {
        window.lib.getPosts(Postgetter);
    }

})();