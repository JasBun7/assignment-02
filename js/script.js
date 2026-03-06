console.log("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", () => {
  setupHamburgerMenu();
  setupBackToTop();
  setupAccordion();
  setupForm();
  setupApiTip();
});

// 1) Hamburger menu
function setupHamburgerMenu() {
  const toggle = document.querySelector("#navToggle");
  const nav = document.querySelector("#siteNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });
}

// 2) Back to top
function setupBackToTop() {
  const btn = document.querySelector("#backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    const show = window.scrollY > 300;
    btn.classList.toggle("is-visible", show);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 3) Accordion
function setupAccordion() {
  const buttons = document.querySelectorAll(".acc-btn");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      if (!panel) return;

      const isOpen = panel.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

// 4) Form validation + success message (contact.html)
function setupForm() {
  const form = document.querySelector("#signupForm");
  if (!form) return;

  const successEl = document.querySelector("#formSuccess");
  const errorEl = document.querySelector("#formError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // clear messages
    if (successEl) {
      successEl.textContent = "";
      successEl.classList.remove("show-message");
    }
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.remove("show-message");
    }

    const fullName = form.querySelector("#fullName")?.value.trim() || "";
    const email = form.querySelector("#email")?.value.trim() || "";
    const program = form.querySelector("#program")?.value.trim() || "";
    const time = form.querySelector("#time")?.value.trim() || "";

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!fullName || !email || !program || !time) {
      if (errorEl) {
        errorEl.textContent = "Please fill out all required fields.";
        errorEl.classList.add("show-message");
      }
      return;
    }

    if (!emailLooksValid) {
      if (errorEl) {
        errorEl.textContent = "Please enter a valid email address.";
        errorEl.classList.add("show-message");
      }
      return;
    }

    if (successEl) {
      successEl.textContent = "Thanks for your interest in NorthStar Study Club!";
      successEl.classList.add("show-message");
    }

    form.reset();
  });
}

// 5) API fetch (index.html)
function setupApiTip() {
  const tipText = document.querySelector("#tipText");
  const newTipBtn = document.querySelector("#newTipBtn");

  if (!tipText || !newTipBtn) return;

  async function loadTip() {
    tipText.textContent = "Loading...";

    try {
      const res = await fetch("https://dummyjson.com/quotes/random");

      if (!res.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await res.json();
      tipText.textContent = `${data.quote} - ${data.author}`;
    } catch (error) {
      tipText.textContent = "Could not load a tip right now. Please try again.";
    }
  }

  newTipBtn.addEventListener("click", loadTip);
  loadTip();
}

