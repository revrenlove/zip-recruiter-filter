document.querySelectorAll("article.job_item").forEach((value) => {
  if (!value.querySelector("button.quick_apply_btn")) {
    value.classList.add("hidden");
  }
});
