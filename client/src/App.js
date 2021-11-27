import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom"

import { StyledSection } from './styles/globalStyles';

// Temp 
import Register from './containers/Authentication/Register';
import SignIn from './containers/Authentication/SignIn';
import Home from './containers/Home';
import Narwhal from './containers/Narwhal';

function App(){

  return (
        <Router>
          <div style = {{height:"100vh"}}>
              <Switch>
                <Route path="/" component={Register} exact/>
                <Route path="/register" component={Register}/>
                <Route path="/signin" component={SignIn}/>
              </Switch>  
          </div>
        </Router>
  );
}

export default App;
