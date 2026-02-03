import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Smartphone, Puzzle } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const HeroSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          {/* Version badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Versão 2.0</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Seja dono da sua própria{" "}
            <span className="text-gradient">plataforma de vendas</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            O checkout inteligente que mais converte. Receba direto na sua conta, sem intermediários.
          </p>
          
          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-10 px-2">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground">Checkout de alta conversão</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border">
              <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground">PWA com notificações</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border">
              <Puzzle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground">Múltiplas integrações</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="https://vozfy.cloud/checkout?p=01da9a723a21a046b6cfbe1cdea85081" target="_blank" rel="noopener noreferrer">
                Quero minha plataforma
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#funcionalidades">
                <Play className="w-5 h-5" />
                Ver funcionalidades
              </a>
            </Button>
          </div>
        </div>
        
        {/* Dashboard mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
};

export default HeroSection;
