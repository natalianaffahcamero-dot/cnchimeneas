import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

import ventFreeImg from "@/assets/category-ventfree.jpg";
import ventedImg from "@/assets/category-vented.jpg";
import electricImg from "@/assets/category-electric.jpg";
import exteriorImg from "@/assets/category-exterior.jpg";

const projects = [
  {
    image: ventFreeImg,
    title: "Residencia El Poblado",
    location: "Medellín",
    type: "Chimenea Vent Free",
  },
  {
    image: ventedImg,
    title: "Casa Campestre La Calera",
    location: "Cundinamarca",
    type: "Chimenea Vented",
  },
  {
    image: electricImg,
    title: "Apartamento Zona T",
    location: "Bogotá",
    type: "Chimenea Eléctrica",
  },
  {
    image: exteriorImg,
    title: "Terraza Privada",
    location: "Cartagena",
    type: "Chimenea Exterior",
  },
];

const Proyectos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Nuestro Trabajo
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Proyectos <span className="text-gradient">Realizados</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore algunos de nuestros proyectos más destacados. 
              Cada instalación es única y personalizada para cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-primary text-sm font-medium mb-2">
                    {project.type}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.location}
                  </p>
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
            ¿Quiere que su proyecto sea el próximo?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctenos por WhatsApp y cuéntenos sobre su visión. 
            Trabajaremos juntos para hacerla realidad.
          </p>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl" className="gap-3">
              <MessageCircle className="w-6 h-6" />
              Iniciar Mi Proyecto
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Proyectos;
