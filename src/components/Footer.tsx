const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">G</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2026 Getfy. Todos os direitos reservados.
            </span>
          </div>
          
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Termos de Uso e Política de Reembolso
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
