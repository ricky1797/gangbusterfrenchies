
import './App.css';
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from '../src/pages/Home'
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' element={<Home/>} exact />
      </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
