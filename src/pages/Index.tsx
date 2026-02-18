import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedVerticalSection from "@/components/sections/FeaturedVerticalSection";
import HowToChooseSection from "@/components/sections/HowToChooseSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedVerticalSection />
      <HowToChooseSection />
      <CategoriesSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
