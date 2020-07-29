import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './modules/Home/Home';

import Login from './modules/Login/Login';
import Signup from './modules/Signup/Singup';

import NotFound from './modules/NotFound/NotFound';

class App extends Component{
  render(){
      return(
          <div className="App">
            <BrowserRouter>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={Signup} />
                <Route component={ NotFound } />
              </Switch>
            </BrowserRouter>
          </div>
      )
  }
}

export default App;
