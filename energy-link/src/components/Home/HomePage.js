// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';

function HomePage() {
  const [viewMode, setViewMode] = useState('date');

  const dateData = [
    { name: '01', Bought: 4, Consumption: 1, Saved: 200 },
    { name: '02', Bought: 3, Consumption: 6, Saved: 400 },
    { name: '03', Bought: 5, Consumption: 3, Saved: 600 },
    // Add more data points for each date
  ];

  const monthData = [
    { name: 'January', Bought: 150, Consumption: 130, Saved: 160 },
    { name: 'February', Bought: 120, Consumption: 110, Saved: 140 },
    { name: 'March', Bought: 200, Consumption: 170, Saved: 190 },
    // Add more data points for each month
  ];

  return (
    <div className="wallet-overview">
      <header>
        <div className="logo">Energy Link</div>
        <nav>
          <ul>
            <li>Electricity</li>
            <li>NFTs</li>
            <li>Wallet</li>
            <li>Funding</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="tabs">
          <button className="active">WALLET</button>
          <button>TRANSACTIONS</button>
          <button>BILLING</button>
        </div>
        <section className="wallet-info">
          <h2>Wallet overview</h2>
          <div className="balance">
            <h3>Your balance</h3>
            <p>
              <span>0 EUR</span>
              <span>≈ 0 SNC</span>
            </p>
          </div>

          <div className="user-details">
            <p>Name: Hari S</p>
            <p>Nickname: hari</p>
            <p>Email: harls.22alm@kongu.edu</p>
            <button
              className="btn"
              onClick={() => window.location.href = 'https://metamask.io/download/'}
            >
              Click here to Register on MetaMask
            </button>
          </div>

          <div className="graph">
            <h2>Consumption Graph</h2>
            <div className="view-toggle">
              <button
                className={viewMode === 'date' ? 'active' : ''}
                onClick={() => setViewMode('date')}
              >
                Date
              </button>
              <button
                className={viewMode === 'month' ? 'active' : ''}
                onClick={() => setViewMode('month')}
              >
                Month
              </button>
            </div>
            <BarChart
              width={500}
              height={300}
              data={viewMode === 'date' ? dateData : monthData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Bought" fill="#8884d8" />
              <Bar dataKey="Consumption" fill="#82ca9d" />
              <Bar dataKey="Saved" fill="#ffc658" />
            </BarChart>
          </div>
        </section>
      </main>
      <div className="buy-electricity">
        <Link to="/know" className="btn-buy-electricity">
          Buy Electricity!
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
