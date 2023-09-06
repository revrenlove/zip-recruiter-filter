if (!allHiddenArticles) {
    var allHiddenArticles = [];
}

{
    const hideListing = (article) =>
        article.parentElement.parentElement.classList.add("hidden");

    const addListingToStorage = (jobTitle, company) =>
        localStorage.setItem(`${jobTitle}-${company}`, "RevrenLove");

    const getJobTitle = (article) => {
        let jobTitle = article.querySelector("h2 a").innerHTML;

        if (/\</.test(jobTitle)) {
            jobTitle = jobTitle.substring(0, jobTitle.indexOf("<"));
        }

        return jobTitle;
    };

    const getCompanyName = (article) =>
        article.querySelector("div div div div div div p a").innerHTML;

    document.querySelectorAll("article").forEach((article) => {
        const jobTitle = getJobTitle(article);
        const company = getCompanyName(article);

        const key = `${jobTitle}-${company}`;

        if (allHiddenArticles.includes(key)) {
            article.parentElement.parentElement.classList.add("hidden");

            return;
        }

        const p = document.createElement("p");

        p.innerHTML = "Hide Listing";
        p.classList.add("z-10");
        p.classList.add("hide-listing");

        p.addEventListener("click", () => {
            addListingToStorage(jobTitle, company);
            hideListing(article);
        });

        article.appendChild(p);

        allHiddenArticles.push(key);

        if (localStorage.getItem(key)) {
            article.parentElement.parentElement.classList.add("hidden");
        }
    });
}
