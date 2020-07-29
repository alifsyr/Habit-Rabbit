import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './modules/Home/Home';
import NotFound from './modules/NotFound/NotFound';

class App extends Component{
  render(){
      return(
          <div className="App">
            <BrowserRouter>
              <Switch>
                <Route path='/home' exact component={Home} />
                <Route path='/' exact component={Home} />
                <Route component={ NotFound } />
              </Switch>
            </BrowserRouter>
          </div>
      )
  }
}

export default App;
