import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Home/HomePage';
import KYCVerification from './components/KYC/Know';
import DocumentUpload from './components/KYC/DocumentUpload';
import FaceCapture from './components/KYC/FaceCapture';
import Address from './components/KYC/Address';
import NumberVerify from './components/KYC/NumberVerify';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/know" element={<KYCVerification />} />
        <Route path="/upload-document" element={<DocumentUpload />} />
        <Route path="/capture-face" element={<FaceCapture />} />
        <Route path="/address" element={<Address />} />
        <Route path="/verify-number" element={<NumberVerify />} />
      </Routes>
    </Router>
  );
};

export default App;
