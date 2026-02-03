import { Code, RefreshCw, Palette, CheckCircle } from "lucide-react";

const SourceCodeSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Source code */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 mx-auto mb-6 flex items-center justify-center glow-sm">
              <Code className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Código Fonte <span className="text-gradient">100% Seu</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Você recebe o código fonte completo. Modifique, personalize e escale sem limites. É vitalício e pode instalar em quantos domínios quiser.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">PHP</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">JavaScript</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">MySQL</span>
            </div>
          </div>
          
          {/* Updates */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Atualizações
            </h3>
            <h4 className="text-lg font-semibold text-primary mb-4">Treinamento Completo Incluso</h4>
            <p className="text-muted-foreground">
              Junto com o código fonte você recebe treinamento completo de instalação, configuração e uso da plataforma.
            </p>
          </div>
          
          {/* White label */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Totalmente Personalizável
            </h3>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% White Label</span>
            </div>
            <p className="text-muted-foreground">
              Personalize cores, logos, textos e toda identidade visual diretamente pelo painel admin. Sem precisar programar.
            </p>
          </div>
        </div>
        
        {/* Training section */}
        <div className="mt-16 glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Treinamento Completo Incluso
          </h3>
          <p className="text-muted-foreground mb-6">
            Não importa seu nível técnico. Nosso treinamento em vídeo ensina desde a instalação até a configuração avançada de todas as integrações.
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50">
              <span className="text-2xl font-bold text-gradient">Taxas quase zero</span>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <span className="text-2xl font-bold text-gradient">Recebimento D+0</span>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <span className="text-2xl font-bold text-gradient">100% seu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourceCodeSection;
