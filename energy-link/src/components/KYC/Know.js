import React, { useState } from 'react';
import './Know.css'; // Ensure this path is correct

function KYCVerification() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={`popup-container ${isPopupOpen ? 'open' : ''}`}>
      <div className="popup">
        <div className="popup-content">
          <div className="icon-container">
            <div className="icon">!</div>
          </div>
          <h2>KYC verification required</h2>
          <p>
            In order to use this feature of the platform, you need to complete your KYC
            verification. Please click the button below to start the process.
          </p>
          <div className="button-container">
            <button className="close-button" onClick={handleClose}>
              CLOSE
            </button>
            <button className="add-kyc-button">ADD KYC VERIFICATION</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KYCVerification;
