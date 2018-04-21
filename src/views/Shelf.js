import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({ shelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          shelf.books.map(book => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))
        }
      </ol>
    </div>
  </div>
);

Shelf.propTypes = {
  shelf: PropTypes.shape({
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }).isRequired,
};

export default Shelf;
