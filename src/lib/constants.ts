export const WHATSAPP_NUMBER = "+57 317 641 0220";
export const EMAIL = "cn.chimeneas@gmail.com";

export const getWhatsAppUrl = () => {
  return "https://wa.me/573176410220?text=Hola%2C%20quiero%20información%20sobre%20chimeneas%20para%20mi%20hogar.";
};

export const CATEGORIES = [
  {
    id: "vent-free",
    name: "Vent Free",
    description: "Chimeneas sin ventilación para máxima eficiencia y flexibilidad de instalación",
    shortDescription: "Sin necesidad de ductos",
  },
  {
    id: "vented",
    name: "Vented",
    description: "Chimeneas con ventilación directa para un fuego auténtico y seguro",
    shortDescription: "Ventilación directa",
  },
  {
    id: "electricas",
    name: "Eléctricas",
    description: "Tecnología LED de última generación con llamas realistas sin combustión",
    shortDescription: "Eficiencia moderna",
  },
  {
    id: "exterior",
    name: "Exterior",
    description: "Diseñadas para espacios al aire libre con resistencia a la intemperie",
    shortDescription: "Ambientes exteriores",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;
