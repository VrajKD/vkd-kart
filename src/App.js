import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom';
import Category from './pages/Category/Category';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Category} />
      </Switch>
    </div>
  );
}

export default App;
