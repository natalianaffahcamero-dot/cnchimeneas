import { Shield, Flame, Sparkles, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantía Total",
    description: "Respaldo completo en todos nuestros productos con garantía extendida y soporte técnico permanente.",
  },
  {
    icon: Flame,
    title: "Tecnología Avanzada",
    description: "Sistemas de combustión eficiente y controles inteligentes para una experiencia superior.",
  },
  {
    icon: Sparkles,
    title: "Diseño Premium",
    description: "Acabados de lujo y materiales de primera calidad que elevan cualquier espacio.",
  },
  {
    icon: Headphones,
    title: "Asesoría Personalizada",
    description: "Atención directa vía WhatsApp para guiarte en cada paso de tu proyecto.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Por Qué Elegirnos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experiencia que <span className="text-gradient">marca la diferencia</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
