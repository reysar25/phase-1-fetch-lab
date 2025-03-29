function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
      return data; 
    })
    .catch(error => console.error('Error fetching books:', error));
}

document.addEventListener('DOMContentLoaded', fetchBooks);

