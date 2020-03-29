import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/hompage.page';
import ShopPage from './pages/shop/shop.page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase-utils';

import './App.css'



class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // Assign default null value
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} ></Route>
          <Route path='/shop' component={ShopPage} ></Route>
          <Route exact path='/signin' 
            render={() =>  this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) }>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
