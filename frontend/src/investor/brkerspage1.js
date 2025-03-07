import React from "react";
import "tailwindcss/tailwind.css";

const brokers = [
  {
    name: "Zerodha",
    link: "zerodha.html",
    services: ["Equity", "Commodity", "Currency", "Futures", "Options"],
  },
  {
    name: "ICICI Direct",
    link: "icici.html",
    services: ["Equity", "Commodity", "Currency", "Futures", "Options"],
  },
  {
    name: "HDFC Securities",
    link: "hdfc.html",
    services: ["Equity", "Commodity", "Currency", "Futures", "Options"],
  },
];

const internationalBrokers = [
  {
    name: "Robinhood",
    link: "robinhood.html",
    services: ["Equity", "Options", "Crypto"],
  },
  {
    name: "E*TRADE",
    link: "etrade.html",
    services: ["Equity", "Options", "Futures"],
  },
  {
    name: "Charles Schwab",
    link: "charlesschwab.html",
    services: ["Equity", "Options", "Futures", "Mutual Funds"],
  },
];

const BrokerCard = ({ broker }) => (
  <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
    <img src="#" alt={`${broker.name} Logo`} className="w-16 h-16 object-contain" />
    <ul className="text-gray-600 mt-2">
      {broker.services.map((service, index) => (
        <li key={index}>{service} ✅</li>
      ))}
    </ul>
    <a
      href={broker.link}
      className="text-lg font-semibold text-blue-600 hover:underline mt-2"
    >
      {broker.name}
    </a>
  </div>
);

const BrokersPage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('background-image-url')" }}>
      <div className="container mx-auto p-4 max-w-screen-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          BLUESTOCK <span className="text-green-500">FIN</span>
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Indian Brokers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brokers.map((broker, index) => (
            <BrokerCard key={index} broker={broker} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">International Brokers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalBrokers.map((broker, index) => (
            <BrokerCard key={index} broker={broker} />
          ))}
        </div>
      </div>

      <footer className="bg-white shadow-inner mt-12 py-6 text-center">
        <p className="text-gray-600">&copy; 2025 Bluestock Fin. All rights reserved.</p>
      </footer>

      <a
        href="#top"
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        ⬆️
      </a>
    </div>
  );
};

export default BrokersPage;
