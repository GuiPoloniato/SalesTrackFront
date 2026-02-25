import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import './style.css';

function Produtos() {
    return(
        <div className="body-produtos">
            <Sidebar />
            <div className="content-produtos">
                <h1>Produtos</h1>
            </div>
        </div>
    )
}
export default Produtos;