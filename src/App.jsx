import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Diet from './components/Diet';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Home from './components/Home';
import CaloriesCalculator from './components/CaloriesCalculator';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
   
      <div>
      <Router>
        <header className="header">
          <a href="#" className="logo">diet</a>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/diet">Diet</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/login">Login</Link>
          </nav>
          <div className="fas fa-bars" id="menu"></div>
        </header>
       
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
         <Route path='/login' element={<Login/>} />
         <Route path='/sign up' element={<Register/>}/>
      
          <Route path="/calories-calculator" element={<CaloriesCalculator/>} />
      
   
      
        </Routes>
    
   
      
      </Router>
    </div>
  );
}

export default App;
