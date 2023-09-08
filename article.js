if (!Article) {
    const getJobTitle = (article) => {
        let jobTitle = article.querySelector("h2 a").innerHTML;

        if (/\</.test(jobTitle)) {
            jobTitle = jobTitle.substring(0, jobTitle.indexOf("<"));
        }

        return jobTitle;
    };

    const getCompanyName = (article) =>
        article.querySelector("div div div div div div p a").innerHTML;

    var Article = class {
        constructor(article) {
            this.jobTitle = getJobTitle(article);
            this.company = getCompanyName(article);
            this.element = article;
        }

        jobTitle;
        company;
        element;

        get key() {
            return `${this.jobTitle}-${this.company}`;
        }
    }
}
