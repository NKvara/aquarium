import Home from "@/pages/aquarium/components/home";
import Discover from "@/pages/aquarium/components/discover";

const AquariumPhone = () => {
  return (
    <div className="overflow-hidden z-10">
      <Home />
      <Discover />
      <div className="w-svw h-svh bg-amber-400" />
    </div>
  );
};

export default AquariumPhone;
