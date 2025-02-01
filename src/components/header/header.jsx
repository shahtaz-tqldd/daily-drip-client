import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "./data";
import { Link } from "react-router-dom";
import { LuSearch, LuUserRound } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true); // Shows header on scroll up
      } else {
        setIsVisible(false); // Hides header on scroll down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-20 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${window.scrollY > 142 ? "bg-white" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="font-logo text-3xl font-bold text-primary">
          Daily Drip
        </Link>
        <div className="flex gap-10">
          {NAV_LINKS?.map((navItem, index) => (
            <Link key={index} to={navItem.link} className="text-primary">
              {navItem.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-2.5">
          <button className="bg-white h-10 w-10 flex items-center justify-center rounded-full border">
            <LuSearch className="text-primary" />
          </button>
          <button className="bg-white h-10 w-10 flex items-center justify-center rounded-full border">
            <RiShoppingCart2Line className="text-primary" />
          </button>
          <button className="bg-white h-10 w-10 flex items-center justify-center rounded-full border">
            <LuUserRound className="text-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
