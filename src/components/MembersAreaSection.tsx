import { Play, BookOpen, TrendingUp, Smartphone, Users, MessageSquare, CheckCircle } from "lucide-react";

const MembersAreaSection = () => {
  const features = [
    { icon: Play, text: "Player de vídeo HD" },
    { icon: BookOpen, text: "Organização por módulos" },
    { icon: TrendingUp, text: "Progresso automático" },
    { icon: Smartphone, text: "Design responsivo" },
    { icon: Users, text: "Gestor de Alunos completo" },
    { icon: MessageSquare, text: "Comunidade com feed integrada" },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Área de Membros{" "}
              <span className="text-gradient">Estilo Netflix</span>
            </h2>
            
            <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Entregue conteúdo de forma profissional com uma área de membros moderna, responsiva e com experiência premium para seus alunos. Inclui comunidade integrada com feed interativo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mockup */}
          <div className="relative">
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 glow-primary">
              {/* Welcome banner */}
              <div className="bg-gradient-to-r from-primary/20 to-emerald-400/20 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-3 sm:mb-4 border border-primary/30">
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2">SEJA MUITO BEM-VINDO(A)</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["COMUNIDADE", "CRONOGRAMA", "RENDA EXTRA", "AULA INAUGURAL"].map((item, i) => (
                    <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-secondary text-[10px] sm:text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Continue watching */}
              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Continuar assistindo</h4>
                <div className="flex gap-2 sm:gap-3">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex-1 aspect-video bg-secondary rounded-md sm:rounded-lg flex items-center justify-center group cursor-pointer hover:bg-secondary/80 transition-colors">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Modules */}
              <div className="space-y-1.5 sm:space-y-2">
                {["Módulo 1 - Introdução", "Módulo 2 - Estratégias", "Módulo 3 - Avançado"].map((module, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 sm:p-3 rounded-md sm:rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors cursor-pointer">
                    <span className="text-xs sm:text-sm text-foreground">{module}</span>
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersAreaSection;
