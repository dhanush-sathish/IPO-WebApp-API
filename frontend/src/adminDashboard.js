import { Component } from "react";
import Sidebar from "./components/adminNav/sidebar";
import Topbar from "./components/adminNav/topbar"

class adminDashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar> </Sidebar>
                <Topbar> </Topbar>
            </div>
        );
    }
}

export default adminDashboard;
