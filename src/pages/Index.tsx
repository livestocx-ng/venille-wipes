import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Mission from "@/components/Mission";
import ProductShowcase from "@/components/ProductShowcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChoose />
      <Mission />
      <ProductShowcase />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
