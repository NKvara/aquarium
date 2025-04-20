import {useEffect, useState} from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowResize;
