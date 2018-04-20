import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';

import './App.css';

const App = () => (
  <div className="App">
    <Route exact path="/" render={Home} />
    <Route path="/search" render={Search} />
  </div>
);

export default App;
