import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header.component'
import Homepage from './pages/homepage/hompage.page'
import ShopPage from './pages/shop/shop.page'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} ></Route>
        <Route path='/shop' component={ShopPage} ></Route>
      </Switch>
    </div>
  );
}

export default App;
