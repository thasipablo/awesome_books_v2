import { retrieveBooksFromStorage } from "./modules/storage.js";
import { handleNavigation } from "./modules/navigation.js";
import { submitForm } from "./modules/form.js";
import { displayBooks } from "./modules/display.js";

// Declare booksCollection as an empty array
let books = [];

// Function to retrieve the books collection from localStorage
books =  retrieveBooksFromStorage();

// Function to display all books in the collection
displayBooks()

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', handleNavigation);
});

// Form submit event handler
submitForm();

// Retrieve books collection from localStorage on page load
retrieveBooksFromStorage();

// Initial display of books
displayBooks();
