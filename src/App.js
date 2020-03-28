import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header.component'
import Homepage from './pages/homepage/hompage.page'
import ShopPage from './pages/shop/shop.page'
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.page'
import { auth } from './firebase/firebase-utils';
import './App.css'



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });

      console.log(this.state.currentUser);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render () {
    return (
      <div className="App">
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={Homepage} ></Route>
          <Route path='/shop' component={ShopPage} ></Route>
          <Route path='/signin' component={SignInAndSignOutPage} ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
