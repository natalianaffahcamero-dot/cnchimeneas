import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/constants";

import ventFreeImg from "@/assets/category-ventfree.jpg";
import ventedImg from "@/assets/category-vented.jpg";
import electricImg from "@/assets/category-electric.jpg";
import exteriorImg from "@/assets/category-exterior.jpg";
import verticalFeaturedImg from "@/assets/chimenea-vertical-featured.jpg";

const categoryImages: Record<string, string> = {
  "vent-free": ventFreeImg,
  "vented": ventedImg,
  "electricas": electricImg,
  "exterior": exteriorImg,
};

const Catalogo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Colección Completa
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Catálogo de <span className="text-gradient">Chimeneas</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore nuestra selección premium de chimeneas de gas, eléctricas y para exteriores.
              Cada modelo combina diseño excepcional con tecnología de vanguardia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured - Chimenea Vertical */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Nuevo Lanzamiento
            </p>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Chimenea Vertical <span className="text-gradient">Exclusiva</span>
          </h2>
          <div className="group relative overflow-hidden rounded-2xl max-w-5xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <img
                src={verticalFeaturedImg}
                alt="Chimenea Vertical CN Chimeneas - Nuevo modelo exclusivo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Original CN Chimeneas</span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Modelo Vertical
                </h3>
                <p className="text-muted-foreground text-base md:text-lg mb-6">
                  Diseño vanguardista con llama vertical ascendente. Una pieza de arte funcional que transforma cualquier espacio en una experiencia de lujo incomparable.
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

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <Link to={`/catalogo/${category.id}`} className="block relative aspect-[16/10] overflow-hidden">
                  <img
                    src={categoryImages[category.id]}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-primary bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider">
                      {category.priceRange}
                    </span>
                  </div>
                </Link>
                <div className="p-8">
                  <p className="text-primary text-sm font-medium mb-2">
                    {category.shortDescription}
                  </p>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.longDescription}
                  </p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                    <span className="text-primary font-semibold">Ideal para:</span>
                    <span>{category.idealFor}</span>
                  </div>
                  <Link
                    to={`/catalogo/${category.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Ver modelos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Necesita ayuda para elegir?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Nuestro equipo está listo para asesorarlo en la selección de la chimenea perfecta para su espacio.
          </p>
          <Button asChild variant="whatsapp" size="xl" className="gap-3">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Solicitar Asesoría
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Catalogo;
