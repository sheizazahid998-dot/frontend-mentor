import BlogPosts from "./components/BlogPosts";
import CommunitySection from "./components/CommunitySection";
import CompaniesInfo from "./components/CompaniesInfo";
import DeveloperSection from "./components/DeveloperSection";
import FooterContent from "./components/FooterContent";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <HowItWorks />
      <DeveloperSection />
      <PricingSection />
      <CompaniesInfo />
      <BlogPosts />
      <CommunitySection />
      <FooterSection />
      <FooterContent />
    </div>
  );
};

export default App;
