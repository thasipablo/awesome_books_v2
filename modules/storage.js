const retrieveBooksFromStorage = () => {
  const storedBooks = localStorage.getItem('books');
  return storedBooks ? JSON.parse(storedBooks) : [];
};

export default retrieveBooksFromStorage;