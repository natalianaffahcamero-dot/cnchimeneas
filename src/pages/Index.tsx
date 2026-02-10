import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedVerticalSection from "@/components/sections/FeaturedVerticalSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedVerticalSection />
      <CategoriesSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
