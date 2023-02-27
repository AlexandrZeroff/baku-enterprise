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
            NAXSOL ENTERPRISES LTD, 9, Vasili Michailidi, 3026, Limassol, Cyprus
          </p>
          <p className="mt-2">© VITER 2023. Legal Terms</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
