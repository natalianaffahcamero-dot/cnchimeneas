import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Users, Target, Heart } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import heroImage from "@/assets/hero-fireplace.jpg";

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="CN Chimeneas"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Nuestra Historia
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Más de 15 años creando
              <span className="block text-gradient">ambientes únicos</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En CN Chimeneas nos especializamos en transformar espacios con chimeneas 
              de la más alta calidad. Combinamos diseño europeo, tecnología de vanguardia 
              y un servicio personalizado para crear experiencias inolvidables en cada hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground">
              Nuestros <span className="text-gradient">Valores</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excelencia",
                description: "Solo trabajamos con las mejores marcas y materiales del mercado.",
              },
              {
                icon: Users,
                title: "Servicio Personal",
                description: "Atención directa y personalizada en cada proyecto.",
              },
              {
                icon: Target,
                title: "Precisión",
                description: "Instalaciones profesionales con los más altos estándares.",
              },
              {
                icon: Heart,
                title: "Pasión",
                description: "Amamos lo que hacemos y eso se refleja en cada chimenea.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                  Por Qué Elegirnos
                </p>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  Experiencia que <span className="text-gradient">respalda</span>
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  "Más de 500 proyectos realizados exitosamente",
                  "Asesoría técnica especializada sin costo",
                  "Garantía extendida en todos nuestros productos",
                  "Instalación profesional certificada",
                  "Servicio post-venta y mantenimiento",
                  "Atención personalizada vía WhatsApp",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="whatsapp" size="xl" className="gap-3">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  Conocer Más
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <p className="font-display text-5xl font-bold text-gradient mb-2">15+</p>
                <p className="text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <p className="font-display text-5xl font-bold text-gradient mb-2">500+</p>
                <p className="text-muted-foreground">Proyectos realizados</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <p className="font-display text-5xl font-bold text-gradient mb-2">100%</p>
                <p className="text-muted-foreground">Clientes satisfechos</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <p className="font-display text-5xl font-bold text-gradient mb-2">4</p>
                <p className="text-muted-foreground">Categorías de producto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Listo para transformar su espacio?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctenos hoy y descubra cómo podemos ayudarle a crear 
            el ambiente perfecto con una chimenea de lujo.
          </p>
          <Button asChild variant="whatsapp" size="xl" className="gap-3">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Iniciar Conversación
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
