# Assignment 03 — Interactive Website Features

**Name:** Jason Zhang  
**Student Number:** 101379014  
**Course:** IMD1005A (Winter 2026)  
**Instructor:** Parthivi Rastogi  

Live Site:  
https://jasbun7.github.io/assignment-02/

GitHub Repository:  
https://github.com/jasbun7/assignment-02

---

# Project Overview

NorthStar Study Club is a simple website designed to help first-year university students build consistent study habits through weekly focus sessions and accountability.

The site contains three pages:

Home – introduction and resources  
About – explanation of how the study club works  
Join – a sign-up form for students  

This assignment expands the previous website by adding interactive JavaScript features.

---

# Feature Checklist

## 1. Responsive Navigation with Hamburger Menu
A hamburger menu appears on smaller screens.  
When clicked, it toggles the navigation menu open and closed.

Challenge:
Making sure the toggle only runs if the navigation elements exist.

---

## 2. Form Validation with Error Messages
The Join page form validates user input before submission.

Validation includes:
- Required fields must be filled
- Email format must be valid
- Success message appears when form is completed correctly

Challenge:
Preventing the page from reloading while validating the form.

---

## 3. Back-to-Top Button
A floating arrow button appears when the user scrolls down the page.

Features:
- Hidden at the top of the page
- Appears after scrolling
- Smoothly scrolls back to the top when clicked

---

## 4. Dynamic Content Rendering from Data
The Study Resources section is generated dynamically using JavaScript.

Resource cards are created from a JavaScript data array instead of being written directly in HTML.

This demonstrates dynamic rendering of content.

---

## 5. Accordion FAQ Section
The FAQ section on the About page uses an accordion interaction.

Features:
- Questions are clickable buttons
- Answers expand and collapse
- Only JavaScript controls the visibility

---

## 6. Live Filtering
The Study Resources section includes filter buttons.

Users can filter resources by category:

All  
Planning  
Focus  
Review  

JavaScript updates which cards are visible based on the selected category.

---

## 7. Fetch and Display Data from a Public API
The Study Tip section loads a random study tip using a public API.

API used:
https://api.adviceslip.com/advice

Features:
- Loads a tip automatically
- "New Tip" button fetches another one
- Handles loading and error states

---

# AI Usage Documentation

AI Tool Used:
ChatGPT

How AI Was Used:
- Helped explain JavaScript concepts used in the assignment
- Assisted with debugging issues in script.js
- Helped structure code for interactive features
- Provided guidance on implementing API requests and event listeners

What I Learned:
- How to structure JavaScript into reusable functions
- How event listeners control interactive features
- How to fetch data from a public API using `fetch()`
- How to dynamically generate HTML content with JavaScript

All AI-assisted code was reviewed and adjusted to match the concepts taught in class.

---

# Technologies Used

HTML5  
CSS3  
JavaScript (Vanilla JS)  
GitHub Pages for hosting

---

# Credits

Hero image source: Pinterest link used for educational purposes.