import React from "react";

const ServiceText = ({ header, text }) => {
  return (
    <article>
      <h2 className="mb-2 md:mb-4 uppercase">{header}</h2>
      <p className="mb-4">{text}</p>
    </article>
  );
};

export default ServiceText;
