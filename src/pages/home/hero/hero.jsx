import React from "react";
import bg from "@/assets/images/bg.jpg";
import coffee from "@/assets/images/coffee.png";
import coffeecup from "@/assets/images/coffeecup.png";
import { motion } from "framer-motion";
import { stats, users } from "./data";

const Hero = () => {
  return (
    <div className="relative pt-12 h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.03, // Set opacity for the background image
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#754E1A]/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full container">
        <div className="absolute top-1/2 -translate-y-1/2 left-0">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-6xl leading-[68px] font-medium text-black/70"
          >
            Enhance Your Coffee <br />
            Experience Today
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8"
          >
            We offer you to enhance your coffee experience
            <br /> with carefully crafted products that elevate every sip
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="py-3 px-8 rounded-full bg-primary text-white mt-16 text-sm font-medium"
          >
            Shop Now
          </motion.button>

          <div className="mt-40 flex">
            {users?.map((user, index) => (
              <motion.img
                key={index}
                src={user?.img}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.25,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className={`h-11 w-11 border-2 border-white rounded-full object-cover ${
                  index !== 0 ? "-ml-3" : ""
                }`}
              />
            ))}

            <motion.div
              initial={{ x: -30, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-11 w-11 border-2 border-white rounded-full flex items-center justify-center -ml-3 text-primary text-xs bg-orange-100 relative z-[-1]"
            >
              +10K
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-[50%] right-1/2 translate-x-1/2 translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className=""
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-[#754E1A]/10 h-[380px] w-[380px] rounded-full center relative"
            >
              <motion.img
                src={coffee}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false, amount: 0.2 }}
                className="h-[400px] mt-24 z-10 relative"
              />

              <motion.div
                initial={{ opacity: 0, y: -10, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="absolute -right-12 top-1/2 rotate-[5deg]"
              >
                <p className="text-sm tracking-wider">
                  Special <br />
                  Weekend
                </p>
                <hr className="border-t border-t-black/30 mt-2" />
                <h1 className="text-6xl text-black/70 font-semibold">19K</h1>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-orange-500/5 h-32 rounded-full flex items-center justify-center"
          >
            <motion.img
              src={coffeecup}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="h-64 mt-24"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-end mt-60"
          >
            {stats?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.25,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center"
              >
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-medium text-black/75">
                    {item.title}
                  </h2>
                  <p className="text-xs font-medium text-black/50">
                    {item.text}
                  </p>
                </div>
                {index + 1 !== stats.length && (
                  <hr className="rotate-90 w-8 border-t border-t-black/20 mt-2 mx-3" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
