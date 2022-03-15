import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route
            path="/product-details/:productId"
            component={ ProductDetails }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
