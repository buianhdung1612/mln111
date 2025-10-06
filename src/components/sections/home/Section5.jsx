import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, HeartSolid } from "iconoir-react";

export const Section5 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <>
      <motion.section
        ref={ref}
        className="mt-[80px] py-[150px] w-[1110px] mx-auto relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-[6rem] text-primary font-[700] text-center w-full">
          Các hình thức tha hóa
        </h2>
        <div className="flex pt-[50px] gap-[30px]">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Link to="/tha-hoa-lao-dong" className="block">
              <div className="relative blog">
                <img
                  className="w-full h-[320px] object-cover object-[center_30%]"
                  src="https://lh4.googleusercontent.com/proxy/wr4oHQU8gkPF63JKhDOVdnIzefghH7f5XXLezath0gvq2_0eDGiswq64tM1lu2J4yz89Q1kabf_rdW1_rbUQeaF0bZAAbU86pQT9OBInwEc0vcKBVR446C6wVGCoQBz0g43sXzp3WxTjDdFxVLL5z3NSmkUBdVvUURfSG1QVmw"
                  alt=""
                  height={320}
                />
                <div className="w-[63px] h-[63px] bg-[#d0bc80] rounded-full text-primary flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] eye">
                  <Eye className="text-[1.8rem]" />
                </div>
              </div>
              <h3 className="pt-[20px] text-[3.5rem] font-[500] text-center hover:text-third transition-colors duration-300">
                Tha hoá trong Lao động
              </h3>
              <div className="flex items-center justify-center mt-[10px]">
                <p className="text-[#d0bc80] font-[700]">05/10/2025</p>
                <div className="w-[44px] h-[44px] flex items-center justify-center border-2 border-secondary rounded-full ml-[20px] text-secondary hover:text-[#d0bc80] hover:border-[#d0bc80] transition-colors duration-300">
                  <HeartSolid className="text-[1rem]" />
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Link to="/tha-hoa-ban-than" className="block">
              <div className="relative blog">
                <img
                  className="w-full h-[320px] object-cover object-[center_30%]"
                  src="https://luatduonggia.vn/wp-content/uploads/2024/09/hien-tuong-tha-hoa-la-gi-hien-tuong-tha-hoa-con-nguoi-la-gi.jpg"
                  alt=""
                  height={320}
                />
                <div className="w-[63px] h-[63px] bg-[#d0bc80] rounded-full text-primary flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] eye">
                  <Eye className="text-[1.8rem]" />
                </div>
              </div>
              <h3 className="pt-[20px] text-[3.5rem] font-[500] text-center hover:text-third transition-colors duration-300">
                Tha hoá Bản thân
              </h3>
              <div className="flex items-center justify-center mt-[10px]">
                <p className="text-[#d0bc80] font-[700]">05/10/2025</p>
                <div className="w-[44px] h-[44px] flex items-center justify-center border-2 border-secondary rounded-full ml-[20px] text-secondary hover:text-[#d0bc80] hover:border-[#d0bc80] transition-colors duration-300">
                  <HeartSolid className="text-[1rem]" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
