import { Book } from "./books.js";
import { displayBooks } from "./display.js";

// Function to handle navigation
export const handleNavigation = (event) => {
  event.preventDefault();
  const targetSection = event.target.dataset.section;
  const sections = document.querySelectorAll(
    ".main-container, .second-container, .contact-info"
  );

  sections.forEach((section) => {
    section.classList.add("hidden");
    if (section.id === targetSection) {
      section.classList.remove("hidden");
    }
  });

  // Remove active class from all nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the clicked nav link
  event.target.classList.add("active");
};

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", handleNavigation);
});
