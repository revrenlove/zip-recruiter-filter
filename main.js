if (!allHiddenArticles) {
    var allHiddenArticles = [];
}

{
    const hideListing = (articleElement) =>
        articleElement.parentElement.parentElement.classList.add("hidden");

    const addHideButton = (article) => {
        const p = document.createElement("p");

        p.innerHTML = "Hide Listing";
        p.classList.add("z-10");
        p.classList.add("hide-listing");

        p.addEventListener("click", () => {
            localStorage.setItem(article.key, "RevrenLove");
            hideListing(article.element);
            allHiddenArticles.push(article.key);
        });

        article.element.appendChild(p);
    };

    // TODO: JE - This is where the shit actually starts... move it to the top
    document.querySelectorAll("article").forEach((articleElement) => {
        const article = new Article(articleElement);

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
