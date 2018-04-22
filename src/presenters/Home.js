import React from 'react';
import HomeView from '../views/Home';
import { getShelfs, getAll, update } from '../BooksAPI';
import { keyValueReducer, keyValueListReducer } from '../utils';


class Home extends React.Component {
  state = {
    booksById: {},
    shelfs: [],
    booksByShelf: {},
  }

  componentDidMount() {
    Promise.all([getAll(), getShelfs()])
      .then(([books, shelfs]) => this.setState({
        booksById: books.reduce(keyValueReducer('id'), {}),
        booksByShelf: books.reduce(keyValueListReducer('shelf', 'id'), {}),
        shelfs,
      }));
  }

  handleOnSelectShelf = (book, shelfId) => {
    update(book, shelfId)
      .then(bookIdsByShelfId =>
        this.setState({ booksByShelf: bookIdsByShelfId }),
      );
  }

  render() {
    return (
      <HomeView
        onSelectShelf={this.handleOnSelectShelf}
        {...this.state}
      />);
  }
}

export default Home;
