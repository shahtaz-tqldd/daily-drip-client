import React from "react";

import coffee from "@/assets/images/coffee.png";
import { motion } from "framer-motion";
import { features } from "./data";

const Features = () => {
  return (
    <section className="bg-[#FAF6E3]/40 py-24">
      <div className="container">
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl text-center font-semibold text-black/70"
        >
          Make your day easy with a drip of coffee
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5 text-black/75 max-w-3xl mx-auto text-center"
        >
          Without a doubt the freshest and best tasting coffee is going to come
          from beans that were ground only moments before being used (for either
          espresso or drip coffee)
        </motion.p>

        <div className="grid grid-cols-7 gap-6 mt-20">
          <div className="col-span-2 flex flex-col justify-between gap-16">
            {features?.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-end"
              >
                <div className="h-16 w-16">{item.icon}</div>
                <h2 className="text-xl font-medium mt-3 mb-2">{item.title}</h2>
                <p className="text-black/60 text-right">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="col-span-3 center">
            <div className="relative">
              <div className="abs-center z-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className=" h-[460px] aspect-square rounded-full bg-orange-100/50"
                ></motion.div>
              </div>
              <div className="abs-center z-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h-[300px] aspect-square rounded-full bg-orange-100"
                ></motion.div>
              </div>
            </div>
            <motion.img
              src={coffee}
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="absolute h-[400px]"
              alt="coffee cup"
            />
          </div>

          <div className="col-span-2 flex flex-col justify-between gap-16">
            {features?.slice(2, 4).map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col"
              >
                <div
                  className={`h-16 w-16 ${index === 0 ? "rotate-[25deg]" : ""}`}
                >
                  {item.icon}
                </div>
                <h2 className="text-xl font-medium mt-3 mb-2">{item.title}</h2>
                <p className="text-black/60">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
