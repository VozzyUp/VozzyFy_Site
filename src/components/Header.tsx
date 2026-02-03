import { Shield, CheckCircle, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      {/* Official banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Plataforma Oficial VozzyFy</span>
          </div>
          <span className="text-xs text-muted-foreground hidden lg:inline">Esta é a plataforma VozzyFy oficial e original.</span>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between text-secondary-foreground">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">V</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-primary">VozzyFy</span>
            </div>
            <span className="badge-official text-xs px-2 py-1">
              <CheckCircle className="w-3 h-3" />
              <span className="hidden sm:inline">Oficial</span>
            </span>
          </div>
          
          {/* Desktop nav */}
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
            <span className="px-2 sm:px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
              v2.0
            </span>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
        
        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col gap-3 border-t border-border pt-4">
            <a 
              href="#funcionalidades" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a 
              href="#integracoes" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrações
            </a>
            <a 
              href="#preco" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preço
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;