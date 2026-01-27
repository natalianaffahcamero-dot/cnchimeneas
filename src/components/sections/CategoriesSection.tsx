import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import ventFreeImg from "@/assets/category-ventfree.jpg";
import ventedImg from "@/assets/category-vented.jpg";
import electricImg from "@/assets/category-electric.jpg";
import exteriorImg from "@/assets/category-exterior.jpg";
const categoryImages: Record<string, string> = {
  "vent-free": ventFreeImg,
  "vented": ventedImg,
  "electricas": electricImg,
  "exterior": exteriorImg
};
const CategoriesSection = () => {
  return <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Nuestro Catálogo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sans">
            ​Descubre nuestras   <span className="text-gradient text-secondary-foreground">Chimeneas
          </span>
          </h2>
          <p className="max-w-2xl mx-auto text-destructive-foreground">Explora nuestro catálogo de chimeneas, cada una diseñada para ti
¡Elije solo lo mejor para crear un espacio lleno de calor y estilo a tu gusto!.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((category, index) => <Link key={category.id} to={`/catalogo/${category.id}`} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Image */}
              <img src={categoryImages[category.id]} alt={category.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary text-sm font-medium mb-2">
                    {category.shortDescription}
                  </p>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Explorar</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-glow" />
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default CategoriesSection;