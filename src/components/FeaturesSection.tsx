import { 
  ShoppingCart, 
  RotateCcw, 
  Palette, 
  Users, 
  Mail, 
  Cloud, 
  GraduationCap, 
  Package, 
  Plus, 
  TrendingUp, 
  LayoutDashboard, 
  Globe, 
  Copy, 
  Shield 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { icon: ShoppingCart, title: "Construtor de Checkout" },
    { icon: RotateCcw, title: "Recuperação de Carrinho" },
    { icon: Palette, title: "Personalização Total da Marca" },
    { icon: Users, title: "Gerencie Infoprodutores" },
    { icon: Mail, title: "Email Marketing" },
    { icon: Cloud, title: "Modo SaaS" },
    { icon: GraduationCap, title: "Gestor de Alunos" },
    { icon: Package, title: "Produto Físico e Infoproduto" },
    { icon: Plus, title: "Order Bump" },
    { icon: TrendingUp, title: "Upsell Inteligente" },
    { icon: LayoutDashboard, title: "Dashboard Completo" },
    { icon: Globe, title: "Multi-domínios" },
    { icon: Copy, title: "Clonagem de Páginas" },
    { icon: Shield, title: "Antifraude Integrado" },
  ];

  return (
    <section id="funcionalidades" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo o que você precisa para{" "}
            <span className="text-gradient">lucrar como dono</span>
            {" "}do seu próprio gateway
          </h2>
          <p className="text-lg text-muted-foreground">
            Recursos profissionais que as maiores plataformas do mercado usam.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="feature-card flex flex-col items-center text-center p-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground leading-tight">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
