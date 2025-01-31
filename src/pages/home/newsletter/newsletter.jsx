import { Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { COFFEE_BEAN, COFFEE_CUP } from "./data";

const Newsletter = () => {
  return (
    <div className="container mt-24 -mb-10 ">
      <div className="max-w-[1200px] mx-auto h-[400px] bg-gradient-to-r from-orange-50 to-orange-200 rounded-3xl overflow-hidden relative center">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.2 }}
          src={COFFEE_CUP}
          className="absolute -left-32 h-[400px]"
          alt="coffee cup"
        />
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.2 }}
          src={COFFEE_BEAN}
          className="absolute right-0 bottom-0"
          alt="coffee cup"
        />

        <div>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl text-center font-semibold text-black/70"
          >
            Join in and get 25% OFF!
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 text-black/75 max-w-3xl mx-auto text-center"
          >
            Subscribe to our newsletter and get 25% off by receiving promo code
          </motion.p>

          <div className="flex justify-center gap-3 mt-14">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[300px] w-full relative"
            >
              <input
                className="outline-none py-3 pl-10 pr-3 bg-white rounded-full  w-full"
                placeholder="Email Address"
              />
              <Mail className="h-4 w-4 absolute top-1/2 -translate-y-1/2 left-4 text-black/50" />
            </motion.div>
            <motion.button
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
              className="py-3 px-8 rounded-full bg-primary text-white text-sm font-medium relative z-20"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
