import { DotArrowUp } from "iconoir-react";
import { useScrollVisibility } from "../hooks/useScrollVisibility";

export const ScrollToTopButton = () => {
  const visible = useScrollVisibility(200);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed w-[93px] right-0 bottom-[50px] flex flex-col items-center justify-center ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.3s, transform 0.3s" }}
    >
      <div className="text-secondary text-[1.8rem] font-[700] [writing-mode:vertical-lr] text-center mb-[10px]">
        TOP
      </div>

      <div
        className={`
          w-[50px] h-[50px]
          rounded-full border-3 border-secondary
          bg-client-primary hover:bg-client-secondary
          cursor-pointer transition-all duration-500 ease-in-out
          flex items-center justify-center
          
        `}
      >
        <DotArrowUp className="text-secondary w-[30px] h-[30px]" />
      </div>
    </div>
  );
};
