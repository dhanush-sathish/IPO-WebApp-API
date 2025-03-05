import {React, useState} from "react";
import Dashboard from "../components/Dashboard";
import Menu from "../components/Menu";
import Topbar from "../components/Topbar";

const AdminDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className={`menubar ${menuOpen ? "open" : ""}`}>
                <Menu />
            </div>
            <div className="main-content">
                <Topbar></Topbar>
                <div className="w-100 main-dashboard">
                    <Dashboard/>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
