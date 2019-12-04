import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom';
import Category from './pages/Category/Category';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          }, () => {
            console.log("State ", this.state);
          })
        })
      }

      this.setState({ currentUser: userAuth });
      console.log("State ", this.state);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
