import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Home/HomePage';
import KYCVerification from './components/KYC/Know';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/know" element={<KYCVerification />} /> {/* Use JSX element */}
      </Routes>
    </Router>
  );
};

export default App;
