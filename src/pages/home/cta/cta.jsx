import React from "react";
import { motion } from "framer-motion";
import CupAnimation from "./cup-animation";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container grid grid-cols-2 items-center gap-16">
        <div className="-mt-10">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold text-black/70"
          >
            Choose the best coffe for you
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 text-black/75"
          >
            Without a doubt the freshest and best tasting coffee is going to
            come from beans that were ground only moments before being used (for
            either espresso or drip coffee), so buying whole beans is highly
            recommended. But whichever choice you make, try and make sure that
            what you're getting is fresh.{" "}
          </motion.p>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 text-black/75"
          >
            Fresh means that it hasn't been on the shelf for more than a week
            before going home with you. I would recommend asking for the best
            selling bean to start your taste testing, as that will undoubtably
            be the most replenished
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true, amount: 0.8 }}
            className="py-3 px-8 rounded-full bg-primary text-white mt-16 text-sm font-medium"
          >
            Learn More
          </motion.button>
        </div>
        <CupAnimation />
      </div>
    </section>
  );
};

export default CTA;
