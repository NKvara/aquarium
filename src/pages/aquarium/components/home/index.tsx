import {Element} from "react-scroll";
import Jellyfish from "@/pages/aquarium/components/home/jellyfish";

const Home = () => {
  return (
    <Element
      name="home"
      className="flex relative justify-center items-center w-svw h-svh z-0"
    >
      <div className="z-20 font-title mb-20">
        <h2 className="ml-6 text-[20px] leading-0 text-white opacity-60">
          Crushing Wave
        </h2>
        <h1 className="text-[200px] leading-[200px] text-white font-bold">
          AQUARIUM
        </h1>
      </div>

      <Jellyfish />

    </Element>
  );
};

export default Home;
