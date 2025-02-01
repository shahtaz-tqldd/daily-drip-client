import React from "react";
import { products } from "./data";
import { motion } from "framer-motion";
import { GoArrowRight, GoHeart } from "react-icons/go";

const ProductsPage = () => {
  const colors = ["#77B25411", "#EB5A3C11", "#6A80B911", "#824D7411"];
  return (
    <div className="py-24 ">
      <div className="container">
        <h2 className="text-3xl font-semibold text-black/75">
          Coffee Collections
        </h2>
        <p className="mt-3">
          Choose the best coffee from your locale with convenient
        </p>

        <div className="flex gap-4 mt-10">
          {["All Collection", "Brasil", "New Orleans"].map((item, index)=>(
            <button key={index} className="py-2 px-4 rounded-full bg-slate-100 border">{item}</button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-x-6 gap-y-24 mt-32">
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
              style={{ background: colors[index % colors.length] }}
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
    </div>
  );
};

export default ProductsPage;
