import React from 'react';
import PropTypes from 'prop-types';

const AUTHORS_SEPARATOR = ', ';

const bookThumbnailStyle = image => image && (
  { width: 128, height: 193, backgroundImage: `url(${image})` }
);

const concatAuthors = authors => authors.join(AUTHORS_SEPARATOR);

const Book = ({ book }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={book.imageLinks && bookThumbnailStyle(book.imageLinks.thumbnail)}
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
};

export default Book;
