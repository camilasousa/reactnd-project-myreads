import React from 'react';
import HomeView from '../views/Home';
import { getShelfs, getAll } from '../BooksAPI';


const organizeBooksByShelfId = books =>
  books.reduce((booksByShelf, book) => {
    const newBooksByShelf = { ...booksByShelf };
    newBooksByShelf[book.shelf] = (newBooksByShelf[book.shelf] || []).concat(book);
    return newBooksByShelf;
  }, {});

const addBooksToShelfs = (shelfs, booksByShelf) =>
  shelfs.map(shelf => ({
    ...shelf,
    books: booksByShelf[shelf.id] || [],
  }));

const completeShelfs = (shelfs, books) =>
  addBooksToShelfs(shelfs, organizeBooksByShelfId(books));


class Home extends React.Component {
  state = {
    shelfs: [],
  }

  componentDidMount() {
    Promise.all([getAll(), getShelfs()])
      .then(([books, shelfs]) => this.setState({ shelfs: completeShelfs(shelfs, books) }));
  }

  render() {
    return (<HomeView shelfs={this.state.shelfs} />);
  }
}

export default Home;
