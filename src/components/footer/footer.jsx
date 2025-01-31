import React from "react";
import { Github, Twitter, Linkedin, Mail, Copyright } from "lucide-react";
import { Link } from "react-router-dom";
import { LEGAL_LINKS, NAV_LINKS, SOCIAL_LINKS } from "../header/data";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-gray-300">
      <div className="container px-4 pb-8 pt-24 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-8">
          {/* Company Info */}
          <div className="col-span-3">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                to="/"
                className="font-logo text-3xl font-bold text-primary"
              >
                Daily Drip
              </Link>
            </motion.div>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-orange-100/70 text-sm mt-5 leading-[24px]"
            >
              We offer you to enhance your coffee experience with carefully
              crafted products that elevate every sip and refreshen your days
            </motion.p>
          </div>

          {/* Resources */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS?.map((navItem, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 25, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link
                    to={navItem.link}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {navItem.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="flex flex-col gap-2">
              <ul className="flex flex-col gap-3">
                {LEGAL_LINKS?.map((navItem, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: 25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: (index + 2) * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Link
                      to={navItem.link}
                      className="hover:text-white transition-colors text-sm"
                    >
                      {navItem.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-sm"
            >
              123 Business Street
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </motion.p>
            <motion.a
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.2 }}
              href="mailto:contact@example.com"
              className="text-sm hover:text-white transition-colors block pt-6"
            >
              contact@example.com
            </motion.a>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-8">
              {SOCIAL_LINKS?.map((navItem, index) => (
                <motion.span
                  key={index}
                  initial={{ x: -25, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <Link
                    to={navItem.link}
                    className="hover:text-white transition-colors text-sm"
                  >
                    <navItem.icon className="h-5 w-5" />
                  </Link>
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ x: 25, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-center text-sm"
            >
              <Copyright size={16} className="mr-2" />
              <span>{currentYear} Daily Drip. All rights reserved.</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
