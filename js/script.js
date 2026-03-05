console.log("JavaScript is connected!");

// Run only after the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#signupForm");

  // If we're not on contact.html, form will be null (that's OK)
  if (!form) return;

  const successEl = document.querySelector("#formSuccess");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // <-- THIS prevents 405 on GitHub Pages

    // Simple "success" behavior for now
    if (successEl) {
      successEl.textContent = "Thanks! We'll get back to you soon.";
    }

    // Optional: clear form after submit
    form.reset();
  });
});