import React from "react";
import "@/assets/styles/layout.css";
import "@/assets/styles/typography.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import CustomCursor from "./components/cursor/custom-cursor";
import SmoothScroll from "./components/cursor/smooth-scroll";

const App = () => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <RouterProvider router={routes} />
    </SmoothScroll>
  );
};

export default App;
