import './App.css';
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom"

import { StyledSection } from './styles/globalStyles';


import { useEuiTheme, EuiThemeProvider } from '@elastic/eui'

// Temp 
import Register from './containers/Authentication/Register';
import SignIn from './containers/Authentication/SignIn';
import Home from './containers/Home';

function App(){
  const { euiTheme } = useEuiTheme();


  return (
        <Router>
          <div style = {{height:"100vh"}}>
              <Switch>
                <Route path="/" component={Register} exact/>
                <Route path="/register" component={Register}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/home" component={Home} />
              </Switch>  
          </div>
        </Router>
  );
}

export default App;
