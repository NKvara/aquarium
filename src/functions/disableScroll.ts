import {useEffect} from "react";

function DisableScroll() {
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    const preventKeys = (e: KeyboardEvent) => {
      const keys = ["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"];
      if (keys.includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, {passive: false});
    window.addEventListener("touchmove", preventScroll, {passive: false});
    window.addEventListener("keydown", preventKeys);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
    };
  }, []);

  return null;
}

export default DisableScroll;
