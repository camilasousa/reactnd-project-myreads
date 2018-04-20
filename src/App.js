import React from 'react';
import { Route } from 'react-router-dom';
import Home from './presenters/Home';
import Search from './presenters/Search';

import './App.css';

const App = () => (
  <div className="app">
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
  </div>
);

export default App;
