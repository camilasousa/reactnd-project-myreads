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

const Results = ({ books }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {
        books.map(book => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))
      }
    </ol>
  </div>
);

Results.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(Book.propTypes.book)).isRequired,
};

const Search = ({ onSearchInputChange, results, query }) => (
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <SearchInput query={query} onChange={onSearchInputChange} />
    </div>
    <Results books={results} />
  </div>
);

Search.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape(Book.propTypes.book)).isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  query: PropTypes.string,
};

Search.defaultProps = {
  query: '',
};

export default Search;
