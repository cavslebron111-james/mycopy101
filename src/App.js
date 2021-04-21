import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import {BrowserRouter, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import sampleHome from './components/sampleHome';
import Post from './components/Post';
import LoginModal from './components/auth/LoginModal';
import Mycart from './components/Mycart';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className='App'>
          
      <AppNavBar />
          
          <Route exact path = '/' component={sampleHome} />
          <Route path = '/:Post_id' component={Post} />
          <Route path = '/LoginModal' component={LoginModal} />
          <Route path = '/Mycart' component={Mycart} />
          
         
         
     
         
            
            
            
            </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;