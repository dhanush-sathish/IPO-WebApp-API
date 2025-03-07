import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import './BluestockDashboard.css';

const BluestockDashboard = () => {

  useEffect(() => {
    const charts = [];

    // Helper function to create charts
    const createChart = (id, type, data, options) => {
      const ctx = document.getElementById(id).getContext('2d');
      charts.push(new Chart(ctx, { type, data, options }));
    };

    // Active Clients Chart
    createChart('activeClientsChart', 'line', {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [{
        label: 'Active Clients',
        data: [1400, 1600, 1900, 2300],
        borderColor: '#1E90FF',
        backgroundColor: 'rgba(30,144,255,0.2)',
        fill: true
      }]
    });

    // Charges Breakdown Chart
    createChart('chargesChart', 'bar', {
      labels: ['Account Charges', 'Maintenance Charges', 'Brokerage Charges'],
      datasets: [{
        label: 'Charges ($)',
        data: [3500, 2500, 6000],
        backgroundColor: ['#32CD32', '#90EE90', '#228B22']
      }]
    });

    // Complaints Chart
    createChart('complaintsChart', 'line', {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [{
        label: 'Complaints',
        data: [4, 6, 2, 5],
        borderColor: '#FF4500',
        backgroundColor: 'rgba(255,69,0,0.2)',
        fill: true
      }]
    });

    // Share Holding Chart
    createChart('shareHoldingChart', 'doughnut', {
      labels: ['Public', 'Private'],
      datasets: [{
        label: 'Share Holding',
        data: [45, 55],
        backgroundColor: ['#8A2BE2', '#9370DB']
      }]
    });

    // Financials Chart
    createChart('financialsChart', 'bar', {
      labels: ['Revenue', 'Profit'],
      datasets: [{
        label: 'Financials ($)',
        data: [1200000, 320000],
        backgroundColor: ['#32CD32', '#228B22']
      }]
    });

    return () => charts.forEach(chart => chart.destroy());
  }, []);

  return (
    <div className="dashboard-container">
      <div className="header">
        <img src="/path/to/bluestock-logo.png" alt="Bluestock Logo" className="logo" />
        <img src="/path/to/bluestock-name.png" alt="Bluestock Company Name" className="logo" />
      </div>

      <div className="card blue-border">
        <h2>Active Clients</h2>
        <canvas id="activeClientsChart"></canvas>
      </div>

      <div className="card green-border">
        <h2>Account and Maintenance Charges</h2>
        <table>
          <thead>
            <tr><th>Type</th><th>Amount ($)</th></tr>
          </thead>
          <tbody>
            <tr><td>Account Charges</td><td>3500</td></tr>
            <tr><td>Maintenance Charges</td><td>2500</td></tr>
            <tr><td>Brokerage Charges</td><td>6000</td></tr>
          </tbody>
        </table>
        <canvas id="chargesChart"></canvas>
      </div>

      <div className="card red-border">
        <h2>Complaints</h2>
        <canvas id="complaintsChart"></canvas>
      </div>

      <div className="card purple-border">
        <h2>Share Holding</h2>
        <table>
          <thead>
            <tr><th>Type</th><th>Percentage</th></tr>
          </thead>
          <tbody>
            <tr><td>Public</td><td>45%</td></tr>
            <tr><td>Private</td><td>55%</td></tr>
          </tbody>
        </table>
        <canvas id="shareHoldingChart"></canvas>
      </div>

      <div className="card yellow-border">
        <h2>Pros and Cons</h2>
        <p>✔ Competitive brokerage fees</p>
        <p>✔ User-friendly platform</p>
        <p>✖ Limited global market access</p>
      </div>

      <div className="card indigo-border">
        <h2>Rating</h2>
        <p>Overall: ⭐ 4.7/5</p>
      </div>

      <div className="card green-border">
        <h2>Financials</h2>
        <table>
          <thead>
            <tr><th>Category</th><th>Amount ($)</th></tr>
          </thead>
          <tbody>
            <tr><td>Revenue</td><td>1,200,000</td></tr>
            <tr><td>Profit</td><td>320,000</td></tr>
          </tbody>
        </table>
        <canvas id="financialsChart"></canvas>
      </div>
    </div>
  );
};

export default BluestockDashboard;
