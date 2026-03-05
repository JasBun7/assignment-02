console.log("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  if (!form) return; // only runs on contact page

  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stops page reload and prevents 405

    if (successMsg) {
      successMsg.textContent = "Thanks for your interest in NorthStar Study Club!";
    }
  });
});