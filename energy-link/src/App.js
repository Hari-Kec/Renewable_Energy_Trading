import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Home/HomePage';
import KYCVerification from './components/KYC/Know';
import BusinessDashboard from './components/BusinessDashboard/BusinessDashboard';
import ReportsPage from './components/BusinessDashboard/Reports/ReportsPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/know" element={<KYCVerification />} /> 
        <Route path="/business" element={<BusinessDashboard />} />
        <Route path='/reports' element={<ReportsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
