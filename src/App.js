import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/Index';
import Login from './pages/Adminlogin';
import Home from './pages/Home';
import RegisterCompany from './pages/RegisterCompany';
// import ResultPage from './pages/ResultPage';
import logo from './logo.svg';
import './App.css';
import CtDashboard from './pages/CtDashboard';
const App = () => {
  return (
    <Router>    
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<RegisterCompany/>} />
        <Route path="/CtDashboard" element={<CtDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
