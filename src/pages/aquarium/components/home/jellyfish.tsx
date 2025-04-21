import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import {useEffect} from "react";

const JellyfishDesktop = () => {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  const springXFront = useSpring(
    useTransform(mouseX, [0, window.innerWidth], [-60, 60]),
    {stiffness: 50, damping: 20}
  );
  const springYFront = useSpring(
    useTransform(mouseY, [0, window.innerHeight], [-60, 60]),
    {stiffness: 50, damping: 20}
  );
  const springXBack = useSpring(
    useTransform(mouseX, [0, window.innerWidth], [-10, 10]),
    {stiffness: 50, damping: 20}
  );
  const springYBack = useSpring(
    useTransform(mouseY, [0, window.innerHeight], [-10, 10]),
    {stiffness: 50, damping: 20}
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="absolute top-[67%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-30">
        <motion.div
          style={{
            x: springXFront,
            y: springYFront
          }}
        >
          <img src="/aquarium/images/jellyfish.png" />
        </motion.div>
      </div>

      <div className="absolute top-2/7 right-80 transform -translate-y-1/2 -translate-x-1/2 blur-[2px] z-10">
        <motion.div
          style={{
            x: springXBack,
            y: springYBack
          }}
        >
          <img src="/aquarium/images/jellyfish3.png" />
        </motion.div>
      </div>

      <div className="absolute top-5/7 left-52 transform -translate-y-1/2 -translate-x-1/2 blur-[2px] z-10">
        <motion.div
          style={{
            x: springXBack,
            y: springYBack
          }}
        >
          <img src="/aquarium/images/jellyfish4.png" />
        </motion.div>
      </div>

      <div className="absolute top-1/7 left-96 transform -translate-y-1/2 -translate-x-1/2 blur-[2px] z-10">
        <motion.div
          style={{
            x: springXBack,
            y: springYBack
          }}
        >
          <img src="/aquarium/images/jellyfish2.png" />
        </motion.div>
      </div>
    </>
  );
};

export default JellyfishDesktop;
