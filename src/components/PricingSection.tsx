import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, ArrowRight, Play } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Acesso Completo",
    "Todas as funcionalidades inclusas",
    "Código fonte completo",
    "Área de membros Netflix",
    "Checkout de alta conversão",
    "Modo SaaS com gestão de infoprodutores",
    "Personalização total pelo painel admin",
    "Treinamento completo incluso",
    "Instalação ilimitada",
    "Atualizações",
    "Suporte via comunidade",
    "Licença vitalícia",
  ];

  return (
    <section id="preco" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Promoção Especial Update 2.0</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lançamento da versão 2.0 com{" "}
            <span className="text-gradient">preço especial</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esta oferta é limitada e o valor retornará ao normal em breve.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-3xl p-8 border-2 border-primary/50 glow-primary">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-2">Tudo isso por um valor que cabe no seu bolso</p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-xl text-muted-foreground line-through">De R$ 997,00</span>
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-lg text-muted-foreground">Por apenas</span>
                <span className="text-5xl md:text-6xl font-bold text-gradient">R$ 99,00</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40">
                <span className="text-sm font-semibold text-primary">Economia de mais de 90%</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Preço promocional válido apenas durante o lançamento do Update 2.0
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-8" />

            {/* Payment type */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Pagamento Único</h3>
              <p className="text-muted-foreground">Pague apenas uma vez e receba tudo</p>
            </div>

            {/* Features list */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="hero" size="xl" className="w-full mb-4">
              Garantir minha plataforma agora
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button variant="heroOutline" size="lg" className="w-full">
              <Play className="w-4 h-4" />
              Ver demonstração
            </Button>

            {/* Trust text */}
            <p className="text-center text-xs text-muted-foreground mt-6">
              Pagamento único. Sem mensalidades. Sem taxas escondidas. Sem renovação. Você paga uma única vez e tem acesso completo e vitalício.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
