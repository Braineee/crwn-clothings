import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/hompage'

import './App.css'

const HatPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} ></Route>
        <Route path='/shop/hats' component={HatPage} ></Route>
      </Switch>
    </div>
  );
}

export default App;
