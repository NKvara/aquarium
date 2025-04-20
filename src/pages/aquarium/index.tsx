import useWheelDirection from "@/functions/useWheelDirection";
import {useEffect, useState} from "react";
import {scroller, Events} from "react-scroll";
import useWindowResize from "@/functions/useWindowResize";
import Pagination from "@/pages/aquarium/components/pagination";
import Home from "@/pages/aquarium/components/home";
import Discover from "@/pages/aquarium/components/discover";
import Fish from "@/pages/aquarium/components/price";
import {stars} from "@/ui/particlePresets";
import {MyParticles} from "@/ui/particles";
import Contact from "@/pages/aquarium/components/contact";

const pages = ["home", "discover", "fish", "contact"];

const scrollTo = (index: number, quick?: boolean) =>
  scroller.scrollTo(pages[index], {
    duration: quick ? 0 : 400,
    delay: 0,
    smooth: "easeInOutQuart"
  });

const AquariumComponent = () => {
  const [currPage, setCurrPage] = useState(0);
  const scroll = useWheelDirection();
  const window = useWindowResize();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("end", () => {
      setScrolled(false);
      scroll.resetScroll();
    });

    return () => {
      Events.scrollEvent.remove("end");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!scrolled) {
      if (scroll.wheelDirection === "down" && pages.length > currPage + 1) {
        scrollTo(currPage + 1);
        setCurrPage(currPage + 1);
        setScrolled(true);
      } else if (scroll.wheelDirection === "up" && 0 <= currPage - 1) {
        scrollTo(currPage - 1);
        setCurrPage(currPage - 1);
        setScrolled(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  useEffect(() => {
    scrollTo(currPage, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window]);

  return (
    <div className="overflow-hidden z-10">
      <Pagination
        pages={pages}
        currPage={currPage}
        event={(num) => {
          setCurrPage(num);
          scrollTo(num);
        }}
      />
      <Home />
      <Discover />
      <Fish />
      <Contact />
    </div>
  );
};

const Aquarium = () => {
  return (
    <div>
      <MyParticles preset={stars} />
      <AquariumComponent />
    </div>
  );
};

export default Aquarium;
