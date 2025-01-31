import { products } from "@/pages/products/data";
import { GoArrowRight, GoHeart } from "react-icons/go";
import React from "react";
import { motion } from "framer-motion";

const HomeProducts = () => {
  const colors = ["#77B25411", "#EB5A3C11", "#6A80B911", "#824D7411"];
  return (
    <div className="container py-24">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
         className="text-5xl text-center font-semibold text-black/70"
      >
        Explore the recent products
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mt-5 max-w-[660px] mx-auto"
      >
        Our delecate drink option include classic espresso choises, house
        spececialities, fruit smoothis and frozen treats
      </motion.p>

      <div className="grid grid-cols-4 gap-6 mt-32">
        {products?.map((product, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: (index + 1) * 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl"
            style={{ background: colors[index] }}
          >
            <motion.img
              src={product.img}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: (index + 1) * 0.25,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-[340px] -mt-20 w-full object-contain"
            />
            <h2 className="text-center uppercase text-sm tracking-[1px] text-black/60">
              Coffee
            </h2>
            <div className="p-5">
              <div className="flbx">
                <h2 className="text-lg">{product.name}</h2>
                <h2 className="font-bold text-primary">${product.price}</h2>
              </div>
              <div className="flbx mt-5">
                <button className="flx gap-2 py-2 pr-3 pl-4 rounded-full bg-white ">
                  Add to cart <GoArrowRight />
                </button>
                <button className="h-11 w-11 center rounded-full border">
                  <GoHeart />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
