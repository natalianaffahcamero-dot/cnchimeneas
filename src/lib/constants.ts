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
    longDescription: "Las chimeneas Vent Free son la solución ideal para apartamentos y espacios sin ductos de ventilación. Ofrecen hasta 99% de eficiencia energética, calor inmediato y una instalación versátil que se adapta a casi cualquier habitación. Perfectas para quienes buscan comodidad sin obras mayores.",
    priceRange: "Rango medio",
    idealFor: "Apartamentos y espacios interiores sin ducto",
  },
  {
    id: "vented",
    name: "Vented",
    description: "Chimeneas con ventilación directa para un fuego auténtico y seguro",
    shortDescription: "Ventilación directa",
    longDescription: "Las chimeneas Vented ofrecen la experiencia más auténtica del fuego real, con ventilación directa al exterior que garantiza máxima seguridad y calidad del aire interior. Ideales para casas con la posibilidad de instalar ducto, entregan una llama vibrante y sensación acogedora incomparable.",
    priceRange: "Premium",
    idealFor: "Casas con ducto o posibilidad de instalación",
  },
  {
    id: "electricas",
    name: "Eléctricas",
    description: "Tecnología LED de última generación con llamas realistas sin combustión",
    shortDescription: "Eficiencia moderna",
    longDescription: "Las chimeneas Eléctricas combinan tecnología LED de última generación con diseño moderno. Sin combustión, sin humo y sin necesidad de gas: solo conéctala y disfruta. Ofrecen efectos de llama ultra realistas, control remoto y calefacción opcional. Perfectas para espacios modernos y minimalistas.",
    priceRange: "Económico",
    idealFor: "Espacios modernos y presupuestos ajustados",
  },
  {
    id: "exterior",
    name: "Exterior",
    description: "Diseñadas para espacios al aire libre con resistencia a la intemperie",
    shortDescription: "Ambientes exteriores",
    longDescription: "Las chimeneas de Exterior transforman terrazas, patios y jardines en espacios acogedores para disfrutar en cualquier estación. Fabricadas con materiales resistentes a la intemperie, ofrecen ambientes íntimos alrededor del fuego con un diseño arquitectónico premium.",
    priceRange: "Premium",
    idealFor: "Terrazas, patios y jardines",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;
