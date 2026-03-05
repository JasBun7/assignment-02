console.log("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#signupForm");

  if (!form) return;

  const successEl = document.querySelector("#formSuccess");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (successEl) {
    successEl.textContent = "Thanks for your interest in NorthStar Study Club!";
    successEl.style.display = "block";
}

    form.reset();
  });
});