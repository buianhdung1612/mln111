import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

export const Section8 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      className="w-[1110px] mx-auto relative pt-[25px] pb-[60px]"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="ml-[200px] text-primary text-[6rem] font-[700] w-[380px] leading-[1.3]"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        Mình đang trên Tiktok!
      </motion.div>
      <motion.p
        className="ml-[200px] text-secondary font-secondary text-[9rem]"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Theo dõi tôi!
      </motion.p>
      <div className="inline-block">
        <motion.a
          href="https://www.tiktok.com/@hoctriet.songthat"
          target="_blank"
          className="ml-[200px] flex items-center text-primary text-[1.8rem] font-[700] py-[30px] px-[32px] button-follow"
          whileHover={{
            scale: 1.07,
            boxShadow: "0 4px 24px rgba(208,187,128,0.18)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span>Theo dõi tôi</span>
          <img
            className="ml-[27px]"
            src="https://avventure.themerex.net/wp-content/uploads/2018/07/arrow-for-button.png"
            alt=""
          />
        </motion.a>
        <img
          className="absolute left-0 top-[20%]"
          src="https://avventure.themerex.net/wp-content/uploads/2018/07/stamp_bg_light.png"
          alt=""
        />
      </div>
    </motion.section>
  );
};
