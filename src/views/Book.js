import React from 'react';
import PropTypes from 'prop-types';
import ShelfSelector from './ShelfSelector';

const AUTHORS_SEPARATOR = ', ';

const bookThumbnailStyle = image => image && (
  { width: 128, height: 193, backgroundImage: `url(${image})` }
);

const concatAuthors = authors => authors.join(AUTHORS_SEPARATOR);


const Book = ({ book, shelfs, selectedShelf, onSelectShelf }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={book.imageLinks && bookThumbnailStyle(book.imageLinks.thumbnail)}
      />
      <ShelfSelector
        shelfs={shelfs}
        value={selectedShelf}
        onChange={e => onSelectShelf(e.target.value)}
      />
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors && concatAuthors(book.authors)}</div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string }),
  }).isRequired,
  shelfs: ShelfSelector.propTypes.shelfs,
  selectedShelf: PropTypes.string,
  onSelectShelf: PropTypes.func.isRequired,
};

Book.defaultProps = {
  shelfs: [],
  selectedShelf: null,
};

export default Book;
