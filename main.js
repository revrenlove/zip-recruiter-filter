if (!allHiddenArticles) {
    var allHiddenArticles = [];
}

{
    // const 

    const hideListing = (articleElement) =>
        articleElement.parentElement.parentElement.classList.add("hidden");

    const addHideButton = (article) => {

        const p = document.createElement("p");

        p.innerHTML = "Hide Listing";
        p.classList.add("z-10");
        p.classList.add("hide-listing");

        p.addEventListener("click", () => {
            localStorage.setItem(article.key);
            hideListing(article.element);
        });

        article.element.appendChild(p);
    };

    // TODO: JE - This is where the shit actually starts... move it to the top
    document.querySelectorAll("article").forEach((articleElement) => {
        const article = new Article(articleElement);

        if (localStorage.getItem(article.key) ||
            allHiddenArticles.includes(article.key)) {

            hideListing(article.element);

            return;
        }

        addHideButton(article);

        // console.log(article, article.key);
    });
}

// if (!allHiddenArticles) {
//     var allHiddenArticles = [];
// }

// {

//     const addListingToStorage = (jobTitle, company) =>
//         localStorage.setItem(`${jobTitle}-${company}`, "RevrenLove");

//     // document.querySelectorAll("article").forEach((article) => {
//     //     const jobTitle = getJobTitle(article);
//     //     const company = getCompanyName(article);

//     //     const key = `${jobTitle}-${company}`;

//     //     if (allHiddenArticles.includes(key)) {
//     //         article.parentElement.parentElement.classList.add("hidden");

//     //         return;
//     //     }

//     //     const p = document.createElement("p");

//     //     p.innerHTML = "Hide Listing";
//     //     p.classList.add("z-10");
//     //     p.classList.add("hide-listing");

//     //     p.addEventListener("click", () => {
//     //         addListingToStorage(jobTitle, company);
//     //         hideListing(article);
//     //     });

//     //     article.appendChild(p);

//     //     allHiddenArticles.push(key);

//     //     if (localStorage.getItem(key)) {
//     //         article.parentElement.parentElement.classList.add("hidden");
//     //     }
//     // });
// }
