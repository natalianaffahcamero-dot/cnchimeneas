import { Home, Flame, Ruler, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Home,
    title: "Tipo de espacio",
    description: "¿Interior o exterior? El ambiente define el tipo de chimenea ideal. Las de interior ofrecen calor concentrado, mientras las de exterior crean ambientes únicos.",
  },
  {
    icon: Wind,
    title: "Ventilación disponible",
    description: "Si tu espacio tiene ducto o salida de humo, una chimenea Vented es perfecta. Sin ducto, elige Vent Free para máxima flexibilidad.",
  },
  {
    icon: Ruler,
    title: "Tamaño del área",
    description: "Medimos tu espacio para recomendarte la potencia y tamaño adecuados. Una chimenea bien dimensionada es eficiente y segura.",
  },
  {
    icon: Flame,
    title: "Estilo y combustible",
    description: "Gas natural, propano o eléctrica: cada opción tiene ventajas. Te asesoramos para que elijas la que mejor se adapte a tu estilo de vida.",
  },
];

const HowToChooseSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Guía de Selección
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            ¿Cómo elegir tu <span className="text-gradient">chimenea ideal</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada hogar es único. Estos son los factores clave que evaluamos contigo para encontrar la chimenea perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary/60 text-sm font-bold">0{index + 1}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            ¿Necesitas ayuda? Agenda una visita técnica gratuita →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToChooseSection;
