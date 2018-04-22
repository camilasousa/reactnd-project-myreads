import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({ shelf, shelfs, books, onSelectShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                shelfs={shelfs}
                selectedShelf={shelf.id}
                onSelectShelf={shelfId => onSelectShelf(book, shelfId)}
              />
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
  }).isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  onSelectShelf: PropTypes.func.isRequired,
  shelfs: Book.propTypes.shelfs,
};

Shelf.defaultProps = {
  shelfs: [],
};

export default Shelf;
