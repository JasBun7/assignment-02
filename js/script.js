console.log("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", () => {
  setupHamburgerMenu();
  setupBackToTop();
  setupAccordion();
  setupForm();
  setupApiTip();
  setupResources();
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

function setupResources() {
  const cardContainer = document.querySelector("#resourceCards");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!cardContainer || !filterButtons.length) return;

  const resources = [
    {
      title: "Weekly Planner",
      category: "Planning",
      description: "Map out your readings, deadlines, and weekly study goals."
    },
    {
      title: "Task Breakdown",
      category: "Planning",
      description: "Turn large assignments into smaller, manageable steps."
    },
    {
      title: "Pomodoro Timer",
      category: "Focus",
      description: "Use short focus sessions and breaks to stay productive."
    },
    {
      title: "Quiet Study Playlist",
      category: "Focus",
      description: "Background music to help reduce distractions while studying."
    },
    {
      title: "Flashcard Review",
      category: "Review",
      description: "Practice key terms and definitions before quizzes and tests."
    },
    {
      title: "End-of-Week Check-in",
      category: "Review",
      description: "Review what you finished and plan what comes next."
    }
  ];

  function renderCards(category) {
    cardContainer.innerHTML = "";

    let filteredResources = resources;

    if (category !== "All") {
      filteredResources = resources.filter((resource) => resource.category === category);
    }

    filteredResources.forEach((resource) => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <h3>${resource.title}</h3>
        <p><strong>Category:</strong> ${resource.category}</p>
        <p>${resource.description}</p>
      `;

      cardContainer.appendChild(card);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      filterButtons.forEach((btn) => {
        btn.classList.remove("active-filter");
      });

      button.classList.add("active-filter");
      renderCards(category);
    });
  });

  renderCards("All");
}

