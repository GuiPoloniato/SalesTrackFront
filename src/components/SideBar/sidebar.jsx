import {useState} from "react";
import { useNavigate, useLocation } from "react-router";
import Dashboard from "../../assets/sidebar/dashboard.svg";
import Vendas from "../../assets/sidebar/vendas.svg";
import Historico from "../../assets/sidebar/historico.svg";
import Produtos from "../../assets/sidebar/produtos.svg";
import Clientes from "../../assets/sidebar/clientes.svg";
import Relatorios from "../../assets/sidebar/relatorios.svg";
import SalesTrack from "../../assets/salesTrack.svg";
import './style.css'

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [itemActive, setItemActive] = useState(location.pathname);

    const handleItemClick = (path) => {
        setItemActive(path);
        navigate(path);
    }

    return(
        <div className="body-sidebar">
            <div className="box-vertical">
                <div className="header-dashboard">
                    <div className="logo">
                        <img src={SalesTrack} alt="" className="salesTrack-img"/>
                        <h1>SalesTrack</h1>
                    </div>
                    
                    <hr />
                </div>
                <div className="sidebar-menu">
                    <div className={`menu-select ${itemActive === '/dashboard' ? 'ativo' : ''}`} onClick={() => handleItemClick('/dashboard')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <img src={Dashboard} alt="" />
                        <span>Dashboard</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/vendas' ? 'ativo' : ''}`} onClick={() => handleItemClick('/vendas')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <img src={Vendas} alt="" />
                        <span>Nova Venda</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/historico' ? 'ativo' : ''}`} onClick={() => handleItemClick('/historico')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <img src={Historico} alt="" />
                        <span>Historico</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/produtos' ? 'ativo' : ''}`} onClick={() => handleItemClick('/produtos')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <img src={Produtos} alt="" />
                        <span>Produtos</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/clientes' ? 'ativo' : ''}`} onClick={() => handleItemClick('/clientes')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <img src={Clientes} alt="" />
                        <span>Clientes</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/relatorios' ? 'ativo' : ''}`} onClick={() => handleItemClick('/relatorios')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <img src={Relatorios} alt="" />
                        <span>Relatorios</span>
                    </div>
                </div>
                <hr className="hr-footer"/>
                <div className="footer-sidebar">
                    <div className="usuario">
                        <h1>Administrador</h1>
                        <h2>Administrador</h2>
                    </div>
                    <div className="logout">
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;