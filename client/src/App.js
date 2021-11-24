import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom"

import { EuiProgress } from '@elastic/eui';


// Temp 
import Register from './containers/Authentication/Register';


function App() {
  return (
    <div className="App" style={{ height: "100vh"}}>
      <Register />
    </div>
  );
}

export default App;
