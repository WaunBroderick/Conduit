import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom"

import { EuiProgress } from '@elastic/eui';


// Temp 
import Register from './containers/Register';


function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
