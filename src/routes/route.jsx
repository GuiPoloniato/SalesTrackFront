import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "../pages/dashboard/dashboard";
import Vendas from "../pages/vendas/vendas";
import Historico from "../pages/historico/historico";
import Produtos from "../pages/produtos/produtos";
import Clientes from "../pages/clientes/clientes";
import Relatorios from "../pages/relatorios/relatorios";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Vendas" element={<Vendas />} />
                <Route path="/Historico" element={<Historico />} />
                <Route path="/Produtos" element={<Produtos />} />
                <Route path="/Clientes" element={<Clientes />} />
                <Route path="/Relatorios" element={<Relatorios />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;