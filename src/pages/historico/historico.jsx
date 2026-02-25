import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import './style.css';

function Historico() {
    return(
        <div className="body-historico">
            <Sidebar />
            <div className="content-historico">
                <h1>Historico</h1>
            </div>
        </div>
    )
}
export default Historico;