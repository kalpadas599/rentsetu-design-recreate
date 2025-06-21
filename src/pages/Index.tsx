
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PopularLocalities from '@/components/PopularLocalities';
import RecommendedProperties from '@/components/RecommendedProperties';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import FAQSection from '@/components/FAQSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PopularLocalities />
      <RecommendedProperties />
      <CustomerTestimonials />
      <FAQSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
