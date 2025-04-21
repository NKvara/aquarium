import Home from "@/pages/aquarium/components/home";
import Discover from "@/pages/aquarium/components/discover";
import Price from "@/pages/aquarium/components/price";
import Contact from '@/pages/aquarium/components/contact';

const AquariumPhone = () => {
  return (
    <div className="overflow-hidden z-10">
      <Home />
      <Discover />
      <Price />
      <Contact />
    </div>
  );
};

export default AquariumPhone;
