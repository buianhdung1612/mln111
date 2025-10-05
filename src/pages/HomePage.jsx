import { Header } from "../components/Header";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { ArrowArchery } from "iconoir-react";
import { Section1 } from "../components/sections/home/Section1";
import { Section2 } from "../components/sections/home/Section2";
import { Section3 } from "../components/sections/home/Section3";
import { Section4 } from "../components/sections/home/Section4";
import { Section5 } from "../components/sections/home/Section5";
import { Section6 } from "../components/sections/home/Section6";
import { Section7 } from "../components/sections/home/Section7";
import { Section8 } from "../components/sections/home/Section8";

export const HomePage = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 mr-[93px]">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
        </div>
        {/* Sidebar */}
        <div className="fixed right-0 h-full bg-white w-[93px] [writing-mode:vertical-lr] flex items-center justify-center text-[2rem] text-secondary font-[700] sidebar">
          Tôi chỉ biết rằng tôi chẳng biết gì
          <div className="w-[50px] h-[50px] border-3 border-secondary flex items-center justify-center rounded-full mt-[20px] relative">
            <ArrowArchery className="rotate-[134deg]" />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};
