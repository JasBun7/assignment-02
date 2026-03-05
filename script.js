console.log("JavaScript is connected!");

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks for your interest in NorthStar Study Club!");
});