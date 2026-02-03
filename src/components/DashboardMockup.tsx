import { TrendingUp, ShoppingCart, DollarSign, Package, Clock, RotateCcw, AlertTriangle, CreditCard } from "lucide-react";
const DashboardMockup = () => {
  const statsTop = [{
    label: "Vendas Totais",
    value: "R$ 1.086,00",
    icon: DollarSign
  }, {
    label: "Quantidade de Vendas",
    value: "14",
    icon: ShoppingCart
  }, {
    label: "Ticket Médio",
    value: "R$ 77,57",
    icon: TrendingUp
  }, {
    label: "Total de Produtos",
    value: "2",
    icon: Package
  }];
  const statsBottom = [{
    label: "Vendas Pendentes",
    value: "R$ 1.068,00",
    icon: Clock
  }, {
    label: "Abandono Carrinho",
    value: "12",
    icon: ShoppingCart
  }, {
    label: "Reembolso",
    value: "R$ 0,00",
    icon: RotateCcw
  }, {
    label: "Charge Back",
    value: "R$ 0,00",
    icon: AlertTriangle
  }];
  const salesData = [{
    date: "23/12",
    value: 350
  }, {
    date: "24/12",
    value: 300
  }, {
    date: "25/12",
    value: 250
  }, {
    date: "26/12",
    value: 200
  }, {
    date: "27/12",
    value: 150
  }];
  return (
    <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 glow-primary max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-emerald-400" />
          <div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Dashboard</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Fernando Rodrigues</p>
          </div>
        </div>
        <div className="px-2 sm:px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
          Integrações
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {statsTop.map((stat, i) => (
          <div key={i} className="bg-secondary/50 rounded-lg sm:rounded-xl p-2.5 sm:p-4 border border-border/50">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
              <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-[10px] sm:text-xs text-muted-foreground truncate">{stat.label}</span>
            </div>
            <p className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {statsBottom.map((stat, i) => (
          <div key={i} className="bg-secondary/30 rounded-lg sm:rounded-xl p-2.5 sm:p-4 border border-border/30">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
              <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
              <span className="text-[10px] sm:text-xs text-muted-foreground truncate">{stat.label}</span>
            </div>
            <p className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="grid gap-3 sm:gap-4">
        <div className="bg-secondary/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border/30">
          <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4">Vendas (7 dias)</h4>
          <div className="flex items-end justify-between h-20 sm:h-32 gap-1 sm:gap-2">
            {salesData.map((item, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-gradient-to-t from-primary to-emerald-400 rounded-t-sm sm:rounded-t-md"
                  style={{ height: `${(item.value / 350) * 100}%` }}
                />
                <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border/30">
          <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4">Métricas de Pagamento</h4>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs text-muted-foreground">Taxa de Conversão</span>
              <span className="text-xs sm:text-sm font-bold text-primary">43,75%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                <span className="text-[10px] sm:text-xs text-muted-foreground">Vendas Pix</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground">R$ 474,00</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] sm:text-xs text-muted-foreground">Vendas Cartão</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground">R$ 612,00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sales count */}
      <div className="mt-3 sm:mt-4 text-center">
        <span className="text-xs sm:text-sm text-muted-foreground">Total: </span>
        <span className="text-xs sm:text-sm font-bold text-primary">12 vendas</span>
      </div>
    </div>
  );
};

export default DashboardMockup;