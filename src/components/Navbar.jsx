import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  };
  return (
    <section id="start">
      <div className="flex items-center h-24 py-3">
        <a href="/">
          <img className="w-40" src={logo} alt="BAKU enterprise"></img>
        </a>
        <nav className="nav-menu hidden md:flex items-center ml-auto">
          <AnchorLink href="#services">SERVICES</AnchorLink>
          <AnchorLink href="#who-is-useful">FOR WHOM USEFUL</AnchorLink>
          <AnchorLink href="#contacts">CONTACT</AnchorLink>
        </nav>
        {toggleMenu ? (
          <img
            className="w-10 ml-auto cursor-pointer md:hidden"
            src={menu_close}
            onClick={() => setToggleMenu(false)}
            alt="Close menu"
          ></img>
        ) : (
          <img
            className="w-10 ml-auto cursor-pointer md:hidden"
            src={menu_open}
            alt="Menu"
            onClick={() => setToggleMenu(true)}
          ></img>
        )}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%", maxWidth: 420 }}
              className="absolute w-full h-[100vh] top-0 right-0 bg-white p-4 z-50"
            >
              <motion.div className="flex justify-end">
                <img
                  className="w-10 ml-auto cursor-pointer md:hidden"
                  src={menu_close}
                  onClick={() => setToggleMenu(false)}
                  alt="Close menu"
                ></img>
              </motion.div>
              <motion.h1 className="my-8 text-center">MENU</motion.h1>
              <motion.div
                className="header-nav-burger flex flex-col items-center mt-8"
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                <AnchorLink
                  href="#services"
                  onClick={() => setToggleMenu(false)}
                >
                  SERVICES
                </AnchorLink>
                <motion.div className="h-4 mb-4 border-b border-slate-300 w-full"></motion.div>
                <AnchorLink
                  href="#who-is-useful"
                  onClick={() => setToggleMenu(false)}
                >
                  FOR WHOM USEFUL
                </AnchorLink>
                <motion.div className="h-4 mb-4 border-b border-slate-300 w-full"></motion.div>
                <AnchorLink
                  href="#contacts"
                  onClick={() => setToggleMenu(false)}
                >
                  CONTACT
                </AnchorLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar;
