import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/constants";

import ventFreeImg from "@/assets/category-ventfree.jpg";
import ventedImg from "@/assets/category-vented.jpg";
import electricImg from "@/assets/category-electric.jpg";
import exteriorImg from "@/assets/category-exterior.jpg";

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

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/catalogo/${category.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img
                  src={categoryImages[category.id]}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-primary text-sm font-medium mb-2">
                    {category.shortDescription}
                  </p>
                  <h2 className="font-display text-4xl font-bold text-foreground mb-3">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Ver modelos</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
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
