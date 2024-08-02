import React, { useState } from 'react';
import './BusinessDashboard.css'; // Create this CSS file for styles
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';

function BusinessDashboard() {
  const [viewMode, setViewMode] = useState('monthly');

  const salesData = [
    { name: 'Jan', Revenue: 1200, Expenses: 800, Profit: 400 },
    { name: 'Feb', Revenue: 1500, Expenses: 900, Profit: 600 },
    { name: 'Mar', Revenue: 1700, Expenses: 1000, Profit: 700 },
    // Add more data points for each month
  ];

  const dailySalesData = [
    { name: '01', Revenue: 300, Expenses: 200, Profit: 100 },
    { name: '02', Revenue: 350, Expenses: 220, Profit: 130 },
    { name: '03', Revenue: 400, Expenses: 250, Profit: 150 },
    // Add more data points for each day
  ];

  return (
    <div className="business-dashboard">
      <header>
        <div className="logo">Business Hub</div>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Sales</li>
            <li>Expenses</li>
            <li>Reports</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="tabs">
          <button className="active">DASHBOARD</button>
          <button>REPORTS</button>
          <button>SETTINGS</button>
        </div>
        <section className="dashboard-info">
          <h2>Business Dashboard</h2>
          <div className="financial-summary">
            <h3>Financial Overview</h3>
            <p>
              <span>Total Revenue: $0</span>
              <span>Total Expenses: $0</span>
              <span>Total Profit: $0</span>
            </p>
          </div>

          <div className="sales-graph">
            <h2>Sales Graph</h2>
            <div className="view-toggle">
              <button
                className={viewMode === 'daily' ? 'active' : ''}
                onClick={() => setViewMode('daily')}
              >
                Daily
              </button>
              <button
                className={viewMode === 'monthly' ? 'active' : ''}
                onClick={() => setViewMode('monthly')}
              >
                Monthly
              </button>
            </div>
            <BarChart
              width={600}
              height={400}
              data={viewMode === 'daily' ? dailySalesData : salesData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Revenue" fill="#8884d8" />
              <Bar dataKey="Expenses" fill="#82ca9d" />
              <Bar dataKey="Profit" fill="#ffc658" />
            </BarChart>
          </div>
        </section>
      </main>
      <div className="manage-finances">
        <Link to="/manage" className="btn-manage-finances">
          Manage Finances
        </Link>
      </div>
    </div>
  );
}

export default BusinessDashboard;
