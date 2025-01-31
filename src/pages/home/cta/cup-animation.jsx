import { motion } from "framer-motion";
import cup0 from "@/assets/images/cup0.png";
import cup2 from "@/assets/images/cup2.png";
import cup3 from "@/assets/images/cup3.png";
const CupAnimation = () => {
  return (
    <div className="relative h-[520px] w-full overflow-hidden">
      <div className="left-1/2 -translate-x-1/2 absolute top-16 z-0">
        <motion.div
          className="bg-[#FAF6E3] h-[420px] w-[420px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Left Cup */}
      <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <motion.img
          src={cup2}
          alt=""
          className="h-[400px] rotate-[25deg]  ml-64"
          initial={{ opacity: 0, x: -100, rotate: 15 }}
          whileInView={{ opacity: 1, x: 0, rotate: 25 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        />
      </div>
      {/* Center Cup */}
      <div className="w-full ml-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.img
          src={cup0}
          alt=""
          className="h-[480px] -mt-10 rotate-0"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* Right Cup */}
      <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-0">
        <motion.img
          src={cup3}
          alt=""
          className="h-[400px] -rotate-[25deg]"
          initial={{ opacity: 0, x: 100, rotate: -15 }}
          whileInView={{ opacity: 1, x: 0, rotate: -25 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default CupAnimation;
