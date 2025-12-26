import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            ¿Listo para transformar tu espacio?
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Comienza tu proyecto de
            <span className="block text-gradient">chimenea ideal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Contáctanos por WhatsApp y recibe asesoría personalizada. 
            Te ayudamos a encontrar la chimenea perfecta para tu hogar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="gap-3 w-full sm:w-auto">
                <MessageCircle className="w-6 h-6" />
                Hablar con un Asesor
              </Button>
            </a>
            <a href="/catalogo">
              <Button variant="premium" size="xl" className="gap-3 w-full sm:w-auto">
                Explorar Catálogo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            Atención personalizada de Lunes a Sábado • Respuesta inmediata
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
