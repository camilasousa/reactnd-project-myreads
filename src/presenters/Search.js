import React from 'react';
import SearchView from '../views/Search';
import { search, getShelfs, update, getAll } from '../BooksAPI';
import { debounce, keyValueReducer, invertListByKey } from '../utils';

class Search extends React.Component {
  state = {
    query: '',
    results: [],
    shelfs: [],
    shelfByBook: {},
  }

  componentDidMount() {
    getShelfs().then(shelfs => this.setState({ shelfs }));
    getAll().then(books => this.setState({
      shelfByBook: books.reduce(keyValueReducer('id', 'shelf'), {}),
    }));
  }

  debouncedSearch = debounce(this.search, 500, this)

  handleOnSearchInputChange = e =>
    this.setState({ query: e.target.value.trim() }, this.debouncedSearch);

  updateResults(query, results) {
    this.setState((prevState) => {
      /*
        Check if query is still valid
        If a request takes too long to answer a newer one could have completed
        and updated the state. We want our results to match the query being shown.
      */
      if (prevState.query !== query) {
        return {};
      }
      return { results };
    });
  }

  search() {
    const { query } = this.state;
    if (!query) {
      this.clearResults();
      return;
    }

    search(query)
      .then(results => this.updateResults(query, results))
      .catch(() => this.clearResults());
  }

  clearResults() {
    this.setState({ results: [] });
  }

  handleOnSelectShelf = (book, shelfId) => {
    update(book, shelfId)
      .then(booksByShelf =>
        this.setState({ shelfByBook: invertListByKey(booksByShelf) }),
      );
  }

  render() {
    return (
      <SearchView
        {...this.state}
        onSelectShelf={this.handleOnSelectShelf}
        onSearchInputChange={this.handleOnSearchInputChange}
      />
    );
  }
}


export default Search;
