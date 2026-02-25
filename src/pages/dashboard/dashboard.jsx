import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import './style.css';

function Dashboard() {
    return(
        <div className="body-dashboard">
            <Sidebar />
            <div className="content-dashboard">
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}
export default Dashboard;