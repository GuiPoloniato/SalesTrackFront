import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import './style.css';

function Clientes() {
    return(
        <div className="body-clientes">
            <Sidebar />
            <div className="content-clientes">
                <h1>Clientes</h1>
            </div>
        </div>
    )
}
export default Clientes;