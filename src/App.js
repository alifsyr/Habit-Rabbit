import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './modules/Home/Home';
import About from './modules/About/About';

import Login from './modules/Login/Login';
import Signup from './modules/Signup/Signup';

import Profile from './modules/Profile/Profile';
import Progress from './modules/Progress/Progress';

import NotFound from './modules/NotFound/NotFound';

import ChooseMBTI from './modules/ChooseMBTI/ChooseMBTI';

class App extends Component{
  render(){
      return(
          <div className="App">
            <BrowserRouter>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/profile' exact component={Profile} />
                <Route path='/progress' exact component={Progress} />
                <Route path='/choose-mbti' exact component={ChooseMBTI} />
                <Route component={ NotFound } />
              </Switch>
            </BrowserRouter>
          </div>
      )
  }
}

export default App;
