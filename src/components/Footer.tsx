const Footer = () => {
  return (
    <footer className="border-t border-border py-6 sm:py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-[10px] sm:text-xs">V</span>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">© 2026 VozzyFy. Todos os direitos reservados.</span>
          </div>
          
          <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Termos de Uso e Política de Reembolso
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;