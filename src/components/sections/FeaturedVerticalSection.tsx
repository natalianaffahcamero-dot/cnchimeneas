import { MessageCircle, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import verticalHomeImg from "@/assets/chimenea-vertical-home.jpg";

const FeaturedVerticalSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Nuevo Lanzamiento
          </p>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Chimenea Vertical <span className="text-gradient">Exclusiva</span>
        </h2>
        <div className="group relative overflow-hidden rounded-2xl max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <img
              src={verticalHomeImg}
              alt="Chimenea Vertical CN Chimeneas - Nuevo modelo exclusivo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Original CN Chimeneas
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Modelo Vertical
              </h3>
              <p className="text-muted-foreground text-base md:text-lg mb-6">
                Diseño vanguardista con llama vertical ascendente. Una pieza de
                arte funcional que transforma cualquier espacio en una
                experiencia de lujo incomparable.
              </p>
              <Button asChild variant="whatsapp" size="lg" className="gap-2 w-fit">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Consultar Disponibilidad
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVerticalSection;
