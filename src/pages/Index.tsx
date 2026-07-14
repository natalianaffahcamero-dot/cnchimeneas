import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionBanner from "@/components/sections/SectionBanner";
import FeaturedVerticalSection from "@/components/sections/FeaturedVerticalSection";
import HowToChooseSection from "@/components/sections/HowToChooseSection";
import FireplaceQuizSection from "@/components/sections/FireplaceQuizSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

import bannerVertical from "@/assets/banner-vertical.jpg";
import bannerChoose from "@/assets/banner-choose.jpg";
import bannerQuiz from "@/assets/banner-quiz.jpg";
import bannerCategories from "@/assets/banner-categories.jpg";
import bannerServices from "@/assets/banner-services.jpg";
import bannerFeatures from "@/assets/banner-features.jpg";
import bannerCta from "@/assets/banner-cta.jpg";

const banners = [
  {
    image: bannerVertical,
    phrase: "Descubre el diseño que redefine el calor",
    subphrase: "Nuestro nuevo lanzamiento vertical transforma cualquier pared en una obra de arte",
  },
  {
    image: bannerChoose,
    phrase: "Elige con confianza. Encuentra tu chimenea ideal",
    subphrase: "Espacio, ventilación y estilo: te guiamos paso a paso",
  },
  {
    image: bannerQuiz,
    phrase: "Responde 3 preguntas y transforma tu hogar",
    subphrase: "Una recomendación personalizada en segundos",
  },
  {
    image: bannerCategories,
    phrase: "Cada espacio merece su propia llama",
    subphrase: "Explora modelos diseñados para interiores y exteriores",
  },
  {
    image: bannerServices,
    phrase: "Más que una chimenea: una experiencia completa",
    subphrase: "Visitas técnicas, revisión y mantenimiento a tu medida",
  },
  {
    image: bannerFeatures,
    phrase: "Calidad que se siente en cada detalle",
    subphrase: "Garantía real, tecnología avanzada y asesoría humana",
  },
  {
    image: bannerCta,
    phrase: "Dale a tu hogar el calor que merece",
    subphrase: "Hablemos hoy y hagamos realidad tu proyecto",
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SectionBanner image={banners[0].image} phrase={banners[0].phrase} subphrase={banners[0].subphrase} />
      <FeaturedVerticalSection />
      <SectionBanner image={banners[1].image} phrase={banners[1].phrase} subphrase={banners[1].subphrase} />
      <HowToChooseSection />
      <SectionBanner image={banners[2].image} phrase={banners[2].phrase} subphrase={banners[2].subphrase} />
      <FireplaceQuizSection />
      <SectionBanner image={banners[3].image} phrase={banners[3].phrase} subphrase={banners[3].subphrase} />
      <CategoriesSection />
      <SectionBanner image={banners[4].image} phrase={banners[4].phrase} subphrase={banners[4].subphrase} />
      <ServicesSection />
      <SectionBanner image={banners[5].image} phrase={banners[5].phrase} subphrase={banners[5].subphrase} />
      <FeaturesSection />
      <SectionBanner image={banners[6].image} phrase={banners[6].phrase} subphrase={banners[6].subphrase} />
      <CTASection />
    </Layout>
  );
};

export default Index;
