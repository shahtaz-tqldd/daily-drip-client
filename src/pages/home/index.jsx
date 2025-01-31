import React from "react";
import Hero from "./hero/hero";
import HomeProducts from "./products/products";
import CTA from "./cta/cta";
import Features from "./features/features";
import Feedback from "./feedback/feedback";
import Newsletter from "./newsletter/newsletter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeProducts />
      <CTA />
      <Features />
      <Feedback />
      <Newsletter />
    </div>
  );
};

export default HomePage;
