import { retrieveBooksFromStorage } from "./storage.js";

let books = retrieveBooksFromStorage();

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Function to save the books collection to localStorage
  static saveBooksToStorage() {
    localStorage.setItem('books', JSON.stringify(books));
  }

  // Function to add a new book to the collection
  addBook() {
    books.push(this);
    Book.saveBooksToStorage();
  }

  // Function to remove a book from the collection
  static removeBook(title) {
    books = books.filter((book) => book.title !== title);
    Book.saveBooksToStorage();
  }
}