import { retrieveBooksFromStorage } from './modules/storage.js';
import { displayBooks } from './modules/display.js';
import { handleNavigation } from './modules/navigation.js';
import { form } from './modules/form.js';

// Retrieve books collection from localStorage on page load
retrieveBooksFromStorage();

// Initial display of books
displayBooks();
