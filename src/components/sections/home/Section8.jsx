import { Link } from "react-router-dom";

export const Section8 = () => {
  return (
    <section className="w-[1110px] mx-auto relative pt-[25px] pb-[60px]">
      <div className="ml-[200px] text-primary text-[6rem] font-[700] w-[380px] leading-[1.3]">
        Mình đang trên Tiktok!
      </div>
      <p className="ml-[200px] text-secondary font-secondary text-[9rem]">
        Theo dõi tôi!
      </p>
      <div className="inline-block">
        <Link
          target="_blank"
          to={"https://www.tiktok.com/@hoctriet.songthat"}
          className="ml-[200px] flex items-center text-primary text-[1.8rem] font-[700] py-[30px] px-[32px] button-follow"
        >
          <span>Theo dõi tôi</span>
          <img
            className="ml-[27px]"
            src="https://avventure.themerex.net/wp-content/uploads/2018/07/arrow-for-button.png"
            alt=""
          />
        </Link>
        <img
          className="absolute left-0 top-[20%]"
          src="https://avventure.themerex.net/wp-content/uploads/2018/07/stamp_bg_light.png"
          alt=""
        />
      </div>
    </section>
  );
};
