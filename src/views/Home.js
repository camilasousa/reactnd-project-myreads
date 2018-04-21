import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

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

const Home = ({ shelfs }) => (
  <div className="list-books">
    <Header />
    <div className="list-books-content">
      {
        shelfs.map(shelf => <Shelf key={shelf.id} shelf={shelf} />)
      }
    </div>
    <SearchButton />
  </div>
);

Home.propTypes = {
  shelfs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default Home;
