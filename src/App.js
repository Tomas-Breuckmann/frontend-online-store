import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Link to="/" exact component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
