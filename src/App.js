import React, { useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage'
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/Checkout/Checkout';
// import { selectCollectionForPreview } from './redux/shop/shop-selectors'

const App = ({ checkUserSession, currentUser }) => {


  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/vkd-kart" render={() => <Redirect to='/' />} />
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<LoginRegister />)} />
      </Switch>
    </div>
  );
}


const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
