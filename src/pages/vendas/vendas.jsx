import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import './style.css';

function Vendas() {
    return(
        <div className="body-vendas">
            <Sidebar />
            <div className="content-vendas">
                <h1>Vendas</h1>
            </div>
        </div>
    )
}
export default Vendas;