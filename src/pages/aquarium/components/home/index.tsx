import {Element} from "react-scroll";
import {usePhoneMediaQuery} from "@/functions/usePhone";
import JellyfishDesktop from "@/pages/aquarium/components/home/jellyfish";
import JellyfishPhone from "@/pages/aquarium/components/home/jellyfishPhone";

const Home = () => {
  const phone = usePhoneMediaQuery();

  return (
    <Element
      name="home"
      className="flex relative justify-center items-center w-svw h-svh z-0"
    >
      <div className="z-20 font-title mb-20">
        <h2 className="ml-2.5 pc:ml-6 text-[20px] leading-0 text-white opacity-60">
          Crushing Wave
        </h2>
        <h1 className="text-[100px] pc:text-[200px] leading-[110px] pc:leading-[200px] text-white font-bold">
          AQUARIUM
        </h1>
      </div>

      {phone ? <JellyfishPhone /> : <JellyfishDesktop />}
    </Element>
  );
};

export default Home;
