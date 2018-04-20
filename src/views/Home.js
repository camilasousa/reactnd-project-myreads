import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
);

const SearchButton = () => (
  <div className="open-search">
    <Link to="/search">Add a book</Link>
  </div>
);

const Home = ({ books }) => (
  <div className="list-books">
    <Header />
    <ul>
      {
        books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))
      }
    </ul>
    <SearchButton />
  </div>
);

Home.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Home;
