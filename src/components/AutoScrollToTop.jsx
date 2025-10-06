import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animate } from "framer-motion";

function AutoScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const controls = animate(window.scrollY, 0, {
      duration: 0.6,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });

    return () => controls.stop();
  }, [pathname]);

  return null;
}

export default AutoScrollToTop;
