// src/BookListPage.js
// import React from 'react';
import books from './booksData';

const BookListPage = () => {
  const openBookPage = (book) => {
    const url = `/book-details?id=${book.id}&title=${encodeURIComponent(
      book.title
    )}&description=${encodeURIComponent(book.description)}`;
    window.open(url, "_blank"); // Open in a new tab
  };

  return (
    <div>
      <h1>Book List</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => openBookPage(book)}
          >
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default BookListPage;
