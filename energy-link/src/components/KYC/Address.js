// src/App.js
import React, { useState } from 'react';
import './Address.css';

function Address() {
  const [address, setAddress] = useState({
    name: '',
    doorNo: '',
    street: '',
    locality: '',
    district: '',
    pincode: '',
    state: '',
    country: ''
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address Details:', address);
    // You can perform further actions here, like sending data to a server.
  };

  return (
    <div className="App">
      <h1>Address Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={address.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="doorNo">Door Number:</label>
          <input
            type="text"
            id="doorNo"
            name="doorNo"
            value={address.doorNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="locality">Locality:</label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={address.locality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            id="district"
            name="district"
            value={address.district}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={address.pincode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={address.country}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Address;
