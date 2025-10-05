import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Section7 = () => {
  return (
    <section className="bg-[#d0bb80] h-[150px] flex flex-col items-center justify-center mt-[100px] relative overflow-hidden">
      <motion.div
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChatBubbleLeftRightIcon className="w-12 h-12 opacity-80" />
      </motion.div>

      <Link
        target="_blank"
        to="https://docs.google.com/forms/d/1YTSOoG2uv_G-JDiJ7TLbRv2dAkJRe8qdjykQYy5-jIk/viewform?edit_requested=true"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-[2.5rem] md:text-[3rem] font-semibold text-primary cursor-pointer
               hover:text-white transition-colors duration-300"
        >
          Điền khảo sát giùm chúng tôi nhé!
          <motion.span
            whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
            className="inline-block"
          >
            📝
          </motion.span>
        </motion.div>
      </Link>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
    </section>
  );
};
