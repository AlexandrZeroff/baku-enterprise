import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="mt-16 md:grid grid-cols-2">
        <a href="/">
          <img className="w-40" src={logo} alt="BAKU enterprise"></img>
        </a>
        <div className="mt-8 md:mt-0">
          <p>
            Baku Enterprise Limited, Room 3602, Tower 1, Enterprise square Five, 38 Wang Chiu, Kowloon Bay, Kowloon Hong Kong
          </p>
          <p className="mt-2">© Baku Enterprise Limited, 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
