import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const quotes = [
  {
    text: "Con người là thước đo của vạn vật",
    author: "Protagoras",
    button: "Tha hóa bản thân",
    link: "/tha-hoa-ban-than",
    image:
      "https://images.unsplash.com/photo-1597761081347-b9d37f912156?w=924&auto=format&fit=crop&q=60",
  },
  {
    text: "Con người sinh ra tự do",
    author: "Rousseau",
    button: "Tha hoá trong Xã hội",
    link: "/tha-hoa-xa-hoi",
    image:
      "https://plus.unsplash.com/premium_photo-1676391702953-f6ef6316eb0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBoaWxvc29waHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    text: "Lao động tạo nên con người",
    author: "Karl Marx",
    button: "Tha hoá trong Lao động",
    link: "/tha-hoa-lao-dong",
    image:
      "https://images.unsplash.com/photo-1603823529430-2cf7e72d13fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBoaWxvc29waHl8ZW58MHx8MHx8fDA%3D",
  },
];

export const Section1 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section
      className="h-[940px] p-[110px] flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(https://avventure.themerex.net/wp-content/uploads/2018/04/biege_bg_.jpg)`,
      }}
    >
      <img
        className="absolute right-[-5%] top-[10%] 2xl:right-[-12%] 2xl:top-[12%]"
        src="https://avventure.themerex.net/wp-content/uploads/2018/07/stamp_bg_light.png"
        alt=""
      />
      <img
        className="absolute bottom-[4.5%] left-[20%] z-10"
        src="https://avventure.themerex.net/wp-content/uploads/2018/07/simple-stamp-red.png"
        alt=""
      />

      {/* Left image */}
      <div className="w-[51%] h-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={quotes[index].image}
            alt={quotes[index].author}
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>

      {/* Right content */}
      <div className="flex-1 ml-[80px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[7rem] text-primary font-[700] leading-[1.1]">
              {quotes[index].text}
            </h2>
            <p className="font-secondary text-secondary font-[500] text-[8rem]">
              {quotes[index].author}
            </p>
            <div className="inline-block mt-[50px]">
              <Link
                to={quotes[index].link}
                className="flex items-center text-primary text-[1.8rem] font-[700] py-[30px] px-[32px] 2xl:py-[24px] 2xl:px-[27px] button-follow"
              >
                <span>{quotes[index].button}</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-4 absolute bottom-[10%] right-[5%]">
        {quotes.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`text-[4rem] cursor-pointer transition-colors ${
              i === index ? "text-secondary" : "text-primary"
            }`}
          >
            •
          </span>
        ))}
      </div>
    </section>
  );
};
