import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
export const Section3 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      className="w-[1140px] px-[15px] mx-auto flex pb-[100px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h3 className="text-[6rem] text-primary font-[700] w-[40%] mr-[60px]">
        Tha hóa là gì?
      </h3>
      <div className="flex-1">
        <p className="text-[2rem] 2xl:text-[1.8rem] text-[#746e5e] mb-[10px]">
          Khái niệm “tha hoá” (alienation) chỉ hiện tượng con người bị tách khỏi
          sản phẩm, hoạt động và bản chất của mình, đặc biệt trong xã hội tư
          bản.
        </p>
        <p className="text-[2rem] 2xl:text-[1.8rem] text-[#746e5e] mb-[10px]">
          Thuật ngữ này vốn có từ Hegel (mang nghĩa tinh thần), nhưng Marx đã
          phát triển theo hướng duy vật: tha hoá là một hiện tượng kinh tế – xã
          hội, nảy sinh từ điều kiện lao động và sở hữu giai cấp.
        </p>
        <p className="text-[2rem] 2xl:text-[1.8rem] text-[#746e5e] mb-[10px]">
          Bản chất: sản phẩm và hoạt động của con người trở thành thế lực xa lạ,
          quay lại thống trị chính họ.
        </p>
      </div>
    </motion.section>
  );
};
