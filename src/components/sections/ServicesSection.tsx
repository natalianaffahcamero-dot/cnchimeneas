import { ClipboardCheck, MapPin, Wrench, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";

const services = [
  {
    icon: MapPin,
    title: "Visita Técnica a Domicilio",
    description: "Nuestro equipo visita tu hogar para evaluar el espacio, tomar medidas y recomendarte la chimenea ideal según las condiciones de tu proyecto.",
    highlight: "Gratis",
  },
  {
    icon: ClipboardCheck,
    title: "Revisión e Inspección",
    description: "Servicio independiente de revisión para chimeneas existentes. Verificamos funcionamiento, seguridad y estado general con un informe detallado.",
    highlight: "Certificado",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description: "Programa de mantenimiento periódico para prolongar la vida útil de tu chimenea y garantizar su funcionamiento óptimo y seguro.",
    highlight: "Programado",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Servicios Profesionales
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Visitas técnicas y <span className="text-gradient">revisión independiente</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No solo vendemos chimeneas — te acompañamos con servicios especializados para que tu inversión esté siempre protegida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.highlight}
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="whatsapp" size="xl" className="gap-3">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Agendar Visita Técnica
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
