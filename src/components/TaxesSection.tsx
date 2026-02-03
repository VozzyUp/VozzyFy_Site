import { Zap, CreditCard, FileText, CheckCircle } from "lucide-react";

const TaxesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Taxa Zero",
      subtitle: "PIX 0%",
      description: "Recebimento instantâneo D+0",
      highlight: true,
    },
    {
      icon: CreditCard,
      title: "Você define",
      subtitle: "Cartão de Crédito",
      description: "Suas taxas - Parcelamento em até 12x",
      highlight: false,
    },
    {
      icon: FileText,
      title: "Sem intermediários",
      subtitle: "Boleto",
      description: "Suas taxas - Compensação em até 3 dias",
      highlight: false,
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Maximize Seus Lucros com{" "}
            <span className="text-gradient">Suas Próprias Taxas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dinheiro cai direto na sua conta. Sem intermediários, sem surpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`feature-card text-center ${feature.highlight ? 'border-primary/50 glow-sm' : ''}`}
            >
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                feature.highlight 
                  ? 'bg-gradient-to-br from-primary to-emerald-400' 
                  : 'bg-secondary'
              }`}>
                <feature.icon className={`w-8 h-8 ${feature.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>
              
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                <CheckCircle className="w-3 h-3" />
                {feature.title}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.subtitle}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxesSection;
