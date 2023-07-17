import { displayBooks } from "./display.js";
import { Book } from "./book.js";

export const submitForm = () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = document.querySelector(".title-tag");
    const authorInput = document.querySelector(".author-tag");

    const title = titleInput.value;
    const author = authorInput.value;

    const book = new Book(title, author);
    book.addBook();

    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
  });
};
