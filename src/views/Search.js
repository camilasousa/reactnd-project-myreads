import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';

const SearchInput = ({ onChange, query }) => (
  <div className="search-books-input-wrapper">
    <input
      type="text"
      value={query}
      placeholder="Search by title or author"
      onChange={onChange}
    />
  </div>
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

const Results = ({ results, onSelectShelf, shelfs, shelfByBook }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {
        results.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              shelfs={shelfs}
              selectedShelf={shelfByBook[book.id]}
              onSelectShelf={shelfId => onSelectShelf(book, shelfId)}
            />
          </li>
        ))
      }
    </ol>
  </div>
);

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape(Book.propTypes.book)).isRequired,
  shelfs: Book.propTypes.shelfs,
  onSelectShelf: PropTypes.func.isRequired,
  shelfByBook: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

Results.defaultProps = {
  shelfs: [],
};

const Search = ({
  onSearchInputChange, query, ...props
}) => (
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <SearchInput query={query} onChange={onSearchInputChange} />
    </div>
    <Results {...props} />
  </div>
);

Search.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
  query: PropTypes.string,
};

Search.defaultProps = {
  query: '',
};

export default Search;
