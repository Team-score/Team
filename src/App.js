import React from 'react';
import './App.css';

import Login from './pages/Login.jsx'
import index from './pages/index.jsx'
//引入路由
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>  
            <Route path="/" exact component={Login}></Route> 
            <Route path="/index" component={index}></Route> 
        </div>
      </Router>
    </div>
  );
}

export default App;
