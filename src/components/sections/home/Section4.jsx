import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowArchery } from "iconoir-react";
import { Link } from "react-router-dom";

export const Section4 = () => {
  const ref = useRef(null);
  // Main section animation only runs once
  const inView = useInView(ref, { once: true, margin: "-100px" });
  // Right content animation only runs once for beautiful stagger effect
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      style={{
        backgroundImage: `url(https://avventure.themerex.net/wp-content/uploads/2018/04/biege_bg_.jpg)`,
      }}
      className="mt-[220px] h-[1070px]"
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <section className="w-[1080px] pb-[150px] mx-auto flex relative">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=313&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1503167334337035%2F&show_text=false&width=560&t=0"
          width="937"
          height="527"
          style={{
            border: "none",
            overflow: "hidden",
            objectFit: "cover",
            marginTop: "-220px",
          }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p className="text-[1.6rem] text-secondary font-[700] uppercase [writing-mode:vertical-lr] mt-[-220px] ml-[50px]">
          Hoan nghênh bạn!
        </p>
        <img
          className="w-[202px] h-[202px] object-cover absolute right-[0.5%] top-[12%]"
          src="https://avventure.themerex.net/wp-content/uploads/2018/07/stamp_red.png"
          alt=""
        />
      </section>
      <section className="w-[1080px] mx-auto flex">
        <div className="w-[50%] bg-white">
          <img
            className="w-[540px] h-[736px] object-cover"
            src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/555541048_122105624739016294_3406924948032419463_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGwjcIUxeqx7drU4ouf5lynPUIRpjfkBCE9QhGmN-QEIXV6olx1odyLMwcc4YpRqPFhkyXDjWPrtUwaPtD2qHbd&_nc_ohc=DxXSvUGlzUcQ7kNvwFvOApS&_nc_oc=AdkcmGmQ_D4hCnI8oOTzulDhvmQ9DfJ4zMG_o_q3eq6uq1tjiJKCvog6pbn5K742FAlgAIJFrMyzpMJmm5qdjWYu&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=c6sknIdRVQE5__GcXHwJdA&oh=00_AffQl7CirQFAyD3vOLToNbmkViL6f-qtOXMj4a7-HpP86Q&oe=68E7CDC0"
            alt=""
            width={540}
            height={736}
          />
        </div>
        <motion.div
          ref={rightRef}
          className="w-[50%] pt-[101px] px-[91px] bg-white"
          initial={{ opacity: 0, x: 60 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-[7rem] text-primary font-[700] leading-[1.2] mb-[50px]">
            Tha hóa xã hội
          </h3>
          <ul className="mb-[60px]">
            {[
              "Mâu thuẫn giai cấp",
              "Phân hoá giàu nghèo",
              "Mặt trái thị trường",
              "Hệ quả xã hội",
            ].map((text, idx) => (
              <motion.li
                key={text}
                className={`flex items-center ${
                  idx < 3 ? "border-b-2 border-dashed border-[#dbdad4]" : ""
                } py-[15px]`}
                initial={{ opacity: 0, y: 30 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + idx * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="w-[40px] h-[40px] border-2 border-secondary text-secondary flex items-center justify-center rounded-full relative">
                  <ArrowArchery className="rotate-[45deg]" />
                </div>
                <span className="ml-[20px] text-[2rem] text-[#746e5e]">
                  {text}
                </span>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-secondary font-secondary text-[5rem]">
              Hãy theo dõi
            </p>
            <Link
              to={"/tha-hoa-xa-hoi"}
              className="flex items-center text-primary text-[1.8rem] font-[700] py-[25px] px-[25px] ml-[15px] mb-[12px] button-follow"
            >
              <span>Thêm</span>
              <img
                className="ml-[27px]"
                src="https://avventure.themerex.net/wp-content/uploads/2018/07/arrow-for-button.png"
                alt=""
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.section>
  );
};
