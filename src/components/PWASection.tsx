import { Bell, Smartphone, Zap, CheckCircle } from "lucide-react";

const PWASection = () => {
  const features = [
    "Notificações push em tempo real",
    "Novo PIX gerado",
    "Pedido aprovado",
    "Disparos automáticos",
    "Instalação como app nativo",
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nova Funcionalidade v2</span>
              <span className="px-2 py-0.5 rounded bg-primary/20 text-xs text-primary">Opcional</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Aplicativo PWA com{" "}
              <span className="text-gradient">Notificações Push</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Transforme sua plataforma em um aplicativo nativo. Seus clientes recebem notificações em tempo real sobre pedidos, pagamentos e muito mais.
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Phone mockup */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-6 max-w-xs mx-auto glow-primary">
              {/* Phone frame */}
              <div className="bg-background rounded-2xl overflow-hidden border border-border">
                {/* Status bar */}
                <div className="bg-secondary/50 px-4 py-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Claro BR</span>
                  <span className="text-xs text-muted-foreground">19:11</span>
                </div>
                
                {/* Notifications */}
                <div className="p-4 space-y-3">
                  <h4 className="text-sm font-semibold text-foreground mb-4">Central de Notificações</h4>
                  
                  {/* Notification 1 */}
                  <div className="bg-card rounded-xl p-3 border border-primary/30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xs">G</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-foreground">Getfy Pedido</span>
                          <span className="text-xs text-muted-foreground">há 6m</span>
                        </div>
                        <span className="text-xs text-primary font-medium">Aprovado!</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Venda aprovada de R$ 99,00 - Pedro Henrique Paiva de Sousa
                    </p>
                  </div>
                  
                  {/* Notification 2 */}
                  <div className="bg-card rounded-xl p-3 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xs">G</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-foreground">Getfy Pix Gerado</span>
                          <span className="text-xs text-muted-foreground">há 9m</span>
                        </div>
                        <span className="text-xs text-yellow-500 font-medium">Aguardando...</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Venda pendente! Valor: R$99,00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PWASection;
