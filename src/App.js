import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom';
import Category from './pages/Category/Category';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:category" component={Category} />
          <Route path="/signin" component={LoginRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
