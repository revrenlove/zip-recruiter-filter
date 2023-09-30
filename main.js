if (!allHiddenArticles) {
    var allHiddenArticles = [];
}

if (typeof initialPageLoadRunHasExecuted === "undefined") {
    var initialPageLoadRunHasExecuted = false;
}

{
    if (!initialPageLoadRunHasExecuted) {
        initialPageLoadRunHasExecuted = true;
    } else {
        const hideListing = (articleElement) =>
            articleElement.classList.add("hidden");

        const addHideButton = (article) => {
            const p = document.createElement("p");

            p.innerHTML = "Hide Listing";
            p.classList.add("z-10");
            p.classList.add("hide-listing");

            p.addEventListener("click", () => {
                localStorage.setItem(article.key, "RevrenLoveZip");
                hideListing(article.element);
                allHiddenArticles.push(article.key);
            });

            article.element.appendChild(p);
        };

        // TODO: JE - This is where the shit actually starts... move it to the top
        document.querySelectorAll("article").forEach((articleElement) => {
            // console.log(articleElement);

            const article = new Article(articleElement);

            // console.log(article);

            if (
                localStorage.getItem(article.key) ||
                allHiddenArticles.includes(article.key)
            ) {
                hideListing(article.element);

                return;
            }

            addHideButton(article);
        });
    }
}
