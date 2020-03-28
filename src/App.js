import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header.component'
import Homepage from './pages/homepage/hompage.page'
import ShopPage from './pages/shop/shop.page'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page'

import { auth, createUserProfileDocument } from './firebase/firebase-utils';

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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data()
          }, () => console.log(this.state));
          console.log(this.state)
        });
      }

      this.setState({ currentUser: userAuth });
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
          <Route path='/signin' component={SignInAndSignUpPage} ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
