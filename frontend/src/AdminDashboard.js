import {React, useState} from "react";
import Menu from "./components/Menubar/Menu";
import Topbar from "./components/Menubar/Topbar";

const AdminDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className={`menubar ${menuOpen ? "open" : ""}`}>
                <Menu />
            </div>
            <div className="main-content">
                <Topbar></Topbar>
            </div>
        </>
    );
}

export default AdminDashboard;
