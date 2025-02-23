import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import InvestorApp from "./Investors";
import "./App.css";
import "./Investors.css";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>app page</h1>
                <InvestorApp />
            </div>
        );
    }
}

export default App;
