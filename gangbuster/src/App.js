
import './App.css';
import React from 'react';
import Home from '../src/pages/Home'
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home/>} exact />
      </Switch>
    </Router>
  );
}

export default App;
