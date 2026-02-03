import { Puzzle, Target, BarChart3, Code } from "lucide-react";

const IntegrationsSection = () => {
  const paymentIntegrations = [
    "Mercado Pago",
    "PushinPay",
    "Efí",
    "Hypecash",
  ];

  const otherIntegrations = [
    "YouTube",
    "n8n",
    "Evolution API",
  ];

  const marketingIntegrations = [
    {
      icon: Target,
      name: "UTMfy",
      description: "Rastreamento completo de UTMs e origem de tráfego",
    },
    {
      icon: BarChart3,
      name: "Meta Ads Pixel",
      description: "Pixel de conversão do Meta Ads integrado automaticamente",
    },
    {
      icon: BarChart3,
      name: "Google Ads",
      description: "Rastreamento de conversões do Google Ads nativo",
    },
    {
      icon: Code,
      name: "Script Personalizado",
      description: "Adicione scripts personalizados para rastreamento e automações customizadas",
    },
  ];

  return (
    <section id="integracoes" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Payment integrations */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 sm:mb-6">
            <Puzzle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Integrações Poderosas</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Conecte com as ferramentas que você já usa
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
          {paymentIntegrations.map((name, i) => (
            <div key={i} className="glass-card rounded-lg sm:rounded-xl px-3 sm:px-6 py-2.5 sm:py-4 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm sm:text-lg">{name[0]}</span>
              </div>
              <span className="text-foreground font-medium text-xs sm:text-base truncate">{name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-16">
          {otherIntegrations.map((name, i) => (
            <div key={i} className="glass-card rounded-lg sm:rounded-xl px-3 sm:px-6 py-2.5 sm:py-4 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm sm:text-lg">{name[0]}</span>
              </div>
              <span className="text-foreground font-medium text-xs sm:text-base truncate">{name}</span>
            </div>
          ))}
        </div>

        {/* Marketing integrations */}
        <div className="text-center mb-6 sm:mb-8 px-2">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Integrações de <span className="text-gradient">Marketing e Conversão</span>
          </h3>
          <p className="text-xs sm:text-base text-muted-foreground">
            Conecte com as principais ferramentas de rastreamento e otimização
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {marketingIntegrations.map((integration, i) => (
            <div key={i} className="feature-card p-3 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                <integration.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{integration.name}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
