import React from 'react';
import HomeView from '../views/Home';
import { getAll } from '../BooksAPI';

class Home extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    getAll().then(books => this.setState({ books }));
  }

  render() {
    return (<HomeView books={this.state.books} />);
  }
}

export default Home;
