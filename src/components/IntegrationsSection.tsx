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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Puzzle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Integrações Poderosas</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conecte com as ferramentas que você já usa
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {paymentIntegrations.map((name, i) => (
            <div key={i} className="glass-card rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{name[0]}</span>
              </div>
              <span className="text-foreground font-medium">{name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {otherIntegrations.map((name, i) => (
            <div key={i} className="glass-card rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{name[0]}</span>
              </div>
              <span className="text-foreground font-medium">{name}</span>
            </div>
          ))}
        </div>

        {/* Marketing integrations */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Integrações de <span className="text-gradient">Marketing e Conversão</span>
          </h3>
          <p className="text-muted-foreground">
            Conecte com as principais ferramentas de rastreamento e otimização
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {marketingIntegrations.map((integration, i) => (
            <div key={i} className="feature-card">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <integration.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{integration.name}</h4>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
