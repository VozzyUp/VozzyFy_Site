import { Shield, CheckCircle } from "lucide-react";
const Header = () => {
  return <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      {/* Official banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Plataforma Oficial VozzyFy - Única Original</span>
          </div>
          <span className="text-xs text-muted-foreground hidden md:inline">Esta é a plataforma VozzyFy oficial e original. Versões vendidas por terceiros são clonadas.</span>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-primary">VozzyFy</span>
            </div>
            <span className="badge-official">
              <CheckCircle className="w-3 h-3" />
              Oficial
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#funcionalidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Funcionalidades
            </a>
            <a href="#integracoes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Integrações
            </a>
            <a href="#preco" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Preço
            </a>
          </nav>
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
              Versão 2.0
            </span>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;