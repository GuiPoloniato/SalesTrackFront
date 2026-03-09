import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import './style.css';

// ── Mock Data ──────────────────────────────────────────────────────────────────
const mockKpis = {
  receitaTotal: 465.40,
  totalVendas: 6,
  ticketMedio: 77.57,
  produtosBaixoEstoque: 0,
};

const mockVendas = [
  { dataFormatada: '10/02', receita: 150 },
  { dataFormatada: '12/02', receita: 180 },
  { dataFormatada: '14/02', receita: 210 },
  { dataFormatada: '16/02', receita: 275 },
  { dataFormatada: '18/02', receita: 290 },
  { dataFormatada: '20/02', receita: 310 },
  { dataFormatada: '22/02', receita: 270 },
  { dataFormatada: '24/02', receita: 55  },
];

const mockProdutos = [
  { nome: 'Fone de Ouvido',  categoria: 'Eletrônicos', totalVendido: 17, receitaTotal: 2548.30 },
  { nome: 'Feijão 1kg',      categoria: 'Alimentos',   totalVendido: 14, receitaTotal: 119.00  },
  { nome: 'Sabonete',        categoria: 'Higiene',      totalVendido: 14, receitaTotal: 49.00   },
  { nome: 'Calça Jeans',     categoria: 'Vestuário',    totalVendido: 9,  receitaTotal: 1169.10 },
  { nome: 'Suco Natural 1L', categoria: 'Bebidas',      totalVendido: 8,  receitaTotal: 100.00  },
  { nome: 'Notebook',        categoria: 'Eletrônicos',  totalVendido: 6,  receitaTotal: 8400.00 },
  { nome: 'Camiseta Básica', categoria: 'Vestuário',    totalVendido: 5,  receitaTotal: 250.00  },
  { nome: 'Arroz 5kg',       categoria: 'Alimentos',    totalVendido: 5,  receitaTotal: 75.00   },
  { nome: 'Shampoo',         categoria: 'Higiene',      totalVendido: 4,  receitaTotal: 60.00   },
  { nome: 'Mouse Wireless',  categoria: 'Eletrônicos',  totalVendido: 3,  receitaTotal: 330.00  },
];

// ── KPI Card ───────────────────────────────────────────────────────────────────
function KpiCard({ label, value, icon, accent }) {
  return (
    <div className="kpi-card" style={{ '--accent': accent }}>
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-info">
        <span className="kpi-label">{label}</span>
        <span className="kpi-value">{value}</span>
      </div>
    </div>
  );
}

// ── Custom Tooltip ─────────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="tooltip-label">{label}</p>
      <p className="tooltip-value">
        {Number(payload[0].value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
    </div>
  );
}

// ── Dashboard ──────────────────────────────────────────────────────────────────
function Dashboard() {
  const dataAtual = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  const fmt = (val) =>
    Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="body-dashboard">
      <Sidebar />
      <div className="content-dashboard">
        <div className="title-page">
          <h1>Dashboard</h1>
          <span>{dataAtual}</span>
        </div>
        <div className="dashboard-body">

          {/* KPIs */}
          <div className="kpi-grid">
            <KpiCard
              label="Receita Total"
              value={fmt(mockKpis.receitaTotal)}
              accent="#22c55e"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              }
            />
            <KpiCard
              label="Total de Vendas"
              value={mockKpis.totalVendas}
              accent="#3b82f6"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              }
            />
            <KpiCard
              label="Ticket Médio"
              value={fmt(mockKpis.ticketMedio)}
              accent="#a855f7"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
              }
            />
            <KpiCard
              label="Estoque Baixo"
              value={mockKpis.produtosBaixoEstoque}
              accent="#f59e0b"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              }
            />
          </div>

          {/* Charts Row */}
          <div className="charts-row">
            <div className="chart-card">
              <div className="chart-card-header">
                <h2>Vendas por Período</h2>
                <span className="chart-badge">Últimos 30 dias</span>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={mockVendas} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#2563eb" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="dataFormatada"
                    tick={{ fontSize: 11, fill: '#94a3b8' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#94a3b8' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `R$${v}`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="receita"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    fill="url(#colorReceita)"
                    dot={false}
                    activeDot={{ r: 5, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Top Products */}
            <div className="chart-card produtos-card">
              <div className="chart-card-header">
                <h2>Top 10 Produtos</h2>
                <span className="chart-badge">Mais vendidos</span>
              </div>
              <div className="produtos-list">
                {mockProdutos.map((p, i) => (
                  <div className="produto-row" key={i}>
                    <span className="produto-rank">{i + 1}</span>
                    <div className="produto-info">
                      <span className="produto-nome">{p.nome}</span>
                      <span className="produto-cat">{p.categoria}</span>
                    </div>
                    <div className="produto-stats">
                      <span className="produto-un">{p.totalVendido} un.</span>
                      <span className="produto-receita">
                        {Number(p.receitaTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
