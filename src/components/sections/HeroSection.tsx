import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import heroImage from "@/assets/hero-fireplace.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Chimenea de lujo en sala moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-8 animate-fade-up">
          <div className="space-y-2">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm drop-shadow-lg">
              Calor y diseño para tu hogar
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight drop-shadow-lg">
              Chimeneas que
              <span className="block text-gradient drop-shadow-lg">transforman espacios</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-xl drop-shadow-md">
            Descubre nuestra colección exclusiva de chimeneas de gas, eléctricas y para exteriores. 
            Diseño europeo, tecnología de vanguardia y asesoría personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="gap-3 w-full sm:w-auto">
                <MessageCircle className="w-6 h-6" />
                Solicitar Asesoría
              </Button>
            </a>
            <a href="/catalogo">
              <Button variant="premium" size="xl" className="gap-3 w-full sm:w-auto">
                Ver Catálogo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-8 pt-8 text-muted-foreground">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm">Proyectos realizados</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center hidden sm:block">
              <p className="font-display text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm">Atención personalizada</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-50 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
