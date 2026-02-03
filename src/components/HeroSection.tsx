import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Smartphone, Puzzle } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const HeroSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Version badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Versão 2.0</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Seja dono da sua própria{" "}
            <span className="text-gradient">plataforma de vendas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            O checkout inteligente que mais converte. Receba direto na sua conta, sem intermediários.
          </p>
          
          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Checkout de alta conversão</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Aplicativo PWA com notificações</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Puzzle className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Múltiplas integrações e muito +</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Quero minha plataforma
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Ver funcionalidades
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
