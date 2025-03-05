import React from "react";

const BlueStockComparison = () => {
  return (
    <div className="container">
      <h1>BlueStock Broker Comparison</h1>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>BlueStock</th>
            <th>Broker Y</th>
            <th>Broker Z</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index}>
              <td>{row.feature}</td>
              <td>{row.blueStock}</td>
              <td>{row.brokerY}</td>
              <td>{row.brokerZ}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
          color: #333333;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          width: 90%;
          margin: 40px auto;
          padding: 30px;
          background: linear-gradient(145deg, #ffffff, #f3f3f3);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          border-radius: 25px;
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        h1 {
          text-align: center;
          font-size: 3rem;
          color: #1a2a6c;
          text-shadow: 2px 4px rgba(0, 0, 0, 0.2);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 30px 0;
          border-radius: 15px;
          overflow: hidden;
        }

        th, td {
          padding: 18px;
          text-align: left;
          font-size: 1.1rem;
        }

        th {
          background: linear-gradient(135deg, #1a2a6c, #4e54c8);
          color: white;
          text-transform: uppercase;
        }

        tr:nth-child(even) {
          background: rgba(26, 42, 108, 0.1);
        }

        tr:hover {
          background: rgba(26, 42, 108, 0.2);
          transition: background 0.4s ease;
        }

        td {
          background: rgba(255, 223, 186, 0.2);
        }
      `}</style>
    </div>
  );
};

const comparisonData = [
  {
    feature: "Basic Details",
    blueStock: "Founded 2015, 300K clients, Nationwide",
    brokerY: "Established 2010, 250K clients, Urban Areas",
    brokerZ: "New in 2020, 80K clients, Online-Only",
  },
  {
    feature: "Account Opening Charges",
    blueStock: "$5 + $8 AMC",
    brokerY: "$10 + $12 AMC",
    brokerZ: "$0 + $15 AMC",
  },
  {
    feature: "Trading Platforms",
    blueStock: "Mobile, Web, Desktop",
    brokerY: "Web & Mobile",
    brokerZ: "Mobile Only",
  },
  {
    feature: "Charts and Data",
    blueStock: "Advanced Live Charts, Historical Data",
    brokerY: "Basic Charts, Limited Data",
    brokerZ: "Live Charts, No Historical Data",
  },
  {
    feature: "Pricing",
    blueStock: "0.02% per trade",
    brokerY: "Flat $2 per trade",
    brokerZ: "0.05% per trade",
  },
  {
    feature: "Leverage",
    blueStock: "8x Equity, 5x Commodity",
    brokerY: "6x Equity, 4x Commodity",
    brokerZ: "3x Equity, 2x Commodity",
  },
  {
    feature: "Orders",
    blueStock: "Advanced Orders, GTT, Bracket",
    brokerY: "Market, Limit, Stop-Loss",
    brokerZ: "Market, Limit",
  },
  {
    feature: "Research & Advice",
    blueStock: "Personalized Research, Daily Insights",
    brokerY: "Standard Reports, Weekly Advice",
    brokerZ: "No Advisory",
  },
  {
    feature: "Education Initiatives",
    blueStock: "Workshops, Online Courses",
    brokerY: "Blog Content Only",
    brokerZ: "Limited Tutorials",
  },
  {
    feature: "Unique Features & Offers",
    blueStock: "Free AMC for 1st Year",
    brokerY: "Zero Brokerage for 2 Months",
    brokerZ: "Referral Bonus $25",
  },
  {
    feature: "Referral Program",
    blueStock: "$60 per Referral",
    brokerY: "$40 per Referral",
    brokerZ: "$30 per Referral",
  },
  {
    feature: "Franchisee Info",
    blueStock: "Available - Starting $1200",
    brokerY: "Limited Availability",
    brokerZ: "Not Available",
  },
];

export default BlueStockComparison;
