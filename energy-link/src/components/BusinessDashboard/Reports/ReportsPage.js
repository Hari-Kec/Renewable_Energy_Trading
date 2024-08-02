import React from 'react';
import './ReportsPage.css'; 
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BarChart, Bar } from 'recharts';

function ReportsPage() {
  const salesData = [
    { name: 'Jan', Revenue: 1200, Expenses: 800, Profit: 400 },
    { name: 'Feb', Revenue: 1500, Expenses: 900, Profit: 600 },
    { name: 'Mar', Revenue: 1700, Expenses: 1000, Profit: 700 },
    // Add more data points
  ];

  const categoryData = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 300 },
    { name: 'Product D', value: 200 },
  ];

  const lineData = [
    { name: 'Week 1', Sales: 200, Orders: 150 },
    { name: 'Week 2', Sales: 300, Orders: 250 },
    { name: 'Week 3', Sales: 400, Orders: 300 },
    { name: 'Week 4', Sales: 500, Orders: 350 },
  ];

  return (
    <div className="reports-page">
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
        <section className="charts">
          <div className="chart-container">
            <h2>Sales Distribution</h2>
            <PieChart width={400} height={400}>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff6f61'][index % 4]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </div>

          <div className="chart-container">
            <h2>Monthly Revenue, Expenses, and Profit</h2>
            <BarChart
              width={600}
              height={300}
              data={salesData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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

          <div className="chart-container">
            <h2>Weekly Sales and Orders</h2>
            <LineChart
              width={700}
              height={300}
              data={lineData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="Orders" stroke="#82ca9d" />
            </LineChart>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ReportsPage;
