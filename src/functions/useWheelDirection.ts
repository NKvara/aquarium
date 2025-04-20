import {useEffect, useState} from "react";

function useWheelDirection() {
  const [wheelDirection, setWheelDirection] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setWheelDirection("down");
      } else if (event.deltaY < 0) {
        setWheelDirection("up");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const resetScroll = () => {
    setWheelDirection(null);
  };

  return {wheelDirection, resetScroll};
}

export default useWheelDirection;
