import {motion, useMotionValue, useSpring} from "framer-motion";
import {useEffect} from "react";

const JellyfishPhone = () => {
  const yBack = useMotionValue(0);
  const yFront = useMotionValue(0);

  const springYBack = useSpring(yBack, {
    stiffness: 60,
    damping: 10
  });

  const springYFront = useSpring(yFront, {
    stiffness: 50,
    damping: 10
  });

  useEffect(() => {
    let direction = 1;
    let position = 0;
    const max = 10;
    const speed = 0.1;

    const interval = setInterval(() => {
      position += direction * speed;
      if (position > max || position < -max) {
        direction *= -1;
      }
      yBack.set(position);
      yFront.set(position * 2);
    }, 16);

    return () => clearInterval(interval);
  }, [yBack, yFront]);

  return (
    <>
      <div className="absolute top-[62%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-30">
        <motion.div
          style={{
            y: springYFront
          }}
        >
          <img src="/aquarium/images/jellyfish.png" />
        </motion.div>
      </div>

      <div className="absolute top-2/7 right-80 transform -translate-y-1/2 -translate-x-1/2 blur-[2px] z-10">
        <motion.div
          style={{
            y: springYBack
          }}
        >
          <img src="/aquarium/images/jellyfish3.png" />
        </motion.div>
      </div>

      <div className="absolute top-5/7 -right-44 transform -translate-y-1/2 -translate-x-1/2 blur-[2px] z-10">
        <motion.div
          style={{
            y: springYBack
          }}
        >
          <img className="w-16" src="/aquarium/images/jellyfish4.png" />
        </motion.div>
      </div>

      <div className="absolute top-1/7 left-96 transform -translate-y-1/2 -translate-x-1/2 blur-[2px] z-10">
        <motion.div
          style={{
            y: springYBack
          }}
        >
          <img src="/aquarium/images/jellyfish2.png" />
        </motion.div>
      </div>
    </>
  );
};

export default JellyfishPhone;
