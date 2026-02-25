import {useState} from "react";
import { useNavigate, useLocation } from "react-router";
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
                    <h1>SalesTrack</h1>
                    <hr />
                </div>
                <div className="sidebar-menu">
                    <div className={`menu-select ${itemActive === '/dashboard' ? 'ativo' : ''}`} onClick={() => handleItemClick('/dashboard')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <span>Dashboard</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/vendas' ? 'ativo' : ''}`} onClick={() => handleItemClick('/vendas')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <span>Nova Venda</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/historico' ? 'ativo' : ''}`} onClick={() => handleItemClick('/historico')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <span>Historico</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/produtos' ? 'ativo' : ''}`} onClick={() => handleItemClick('/produtos')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <span>Produtos</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/clientes' ? 'ativo' : ''}`} onClick={() => handleItemClick('/clientes')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
                        <span>Clientes</span>
                    </div>
                    <div className={`menu-select ${itemActive === '/relatorios' ? 'ativo' : ''}`} onClick={() => handleItemClick('/relatorios')}>
                        {/* <img src={itemActive === '/dashboard' ? DeshboardIconWhite : DeshboardIcon} alt="Icon Deshboard" /> */}
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