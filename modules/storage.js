// Function to retrieve the books collection from localStorage
export const retrieveBooksFromStorage = () => {
  const storedBooks = localStorage.getItem('books');
  books = storedBooks ? JSON.parse(storedBooks) : [];
};
