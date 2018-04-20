import React from 'react';
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

const Home = () => (
  <div className="list-books">
    <Header />

    <SearchButton />
  </div>
);

export default Home;
