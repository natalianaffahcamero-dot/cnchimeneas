import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft, Check } from "lucide-react";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/constants";
import { Link } from "react-router-dom";

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

const categoryDetails: Record<string, { features: string[]; specs: string[] }> = {
  "vent-free": {
    features: [
      "Sin necesidad de chimenea o ductos externos",
      "Eficiencia energética del 99%",
      "Instalación flexible en cualquier habitación",
      "Control de temperatura integrado",
      "Diseños modernos y clásicos disponibles",
    ],
    specs: [
      "BTU: 10,000 - 40,000",
      "Combustible: Gas natural o propano",
      "Sensor de oxígeno incluido",
      "Certificación de seguridad",
    ],
  },
  "vented": {
    features: [
      "Llama auténtica y realista",
      "Ventilación directa al exterior",
      "Vidrio sellado herméticamente",
      "Mayor potencia calorífica",
      "Ideal para espacios grandes",
    ],
    specs: [
      "BTU: 20,000 - 60,000",
      "Combustible: Gas natural o propano",
      "Ventilación directa o B-vent",
      "Eficiencia: 70-85%",
    ],
  },
  "electricas": {
    features: [
      "Sin combustión ni emisiones",
      "Llamas LED ultra realistas",
      "Control remoto y WiFi",
      "Calefacción opcional",
      "Instalación sin obras",
    ],
    specs: [
      "Voltaje: 110V - 220V",
      "Consumo: 500W - 1500W",
      "Efectos de llama ajustables",
      "Temporizador programable",
    ],
  },
  "exterior": {
    features: [
      "Resistente a la intemperie",
      "Materiales premium outdoor",
      "Múltiples opciones de combustible",
      "Diseños para terrazas y jardines",
      "Iluminación ambiental incluida",
    ],
    specs: [
      "BTU: 40,000 - 100,000",
      "Materiales: Acero inoxidable, piedra",
      "Ignición electrónica",
      "Garantía extendida outdoor",
    ],
  },
};

const CategoriaDetalle = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const details = categoryId ? categoryDetails[categoryId] : null;
  const image = categoryId ? categoryImages[categoryId] : "";

  if (!category || !details) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Categoría no encontrada
            </h1>
            <Link to="/catalogo">
              <Button variant="premium">Volver al catálogo</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappMessage = `Hola, quiero información sobre chimeneas ${category.name} para mi hogar.`;

  return (
    <Layout>
      {/* Back link */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </Link>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                {category.shortDescription}
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
                Chimeneas <span className="text-gradient">{category.name}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {category.description}
              </p>
              <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Consultar Precios
                </Button>
              </a>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Características
              </h2>
              <ul className="space-y-4">
                {details.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Especificaciones
              </h2>
              <ul className="space-y-4">
                {details.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Interesado en chimeneas {category.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctenos por WhatsApp para recibir asesoría personalizada, 
            cotizaciones y resolver todas sus dudas.
          </p>
          <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl" className="gap-3">
              <MessageCircle className="w-6 h-6" />
              Solicitar Información
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default CategoriaDetalle;
