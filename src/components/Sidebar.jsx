import { ArrowArchery } from "iconoir-react";

export const Sidebar = () => {
  return (
    <div className="fixed right-0 h-full bg-white w-[93px] [writing-mode:vertical-lr] flex items-center justify-center text-[2rem] text-secondary font-[700] sidebar">
      Tôi chỉ biết rằng tôi chẳng biết gì
      <div className="w-[50px] h-[50px] border-3 border-secondary flex items-center justify-center rounded-full mt-[20px] relative">
        <ArrowArchery className="rotate-[134deg]" />
      </div>
    </div>
  );
};
