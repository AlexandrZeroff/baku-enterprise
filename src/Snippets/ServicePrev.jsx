import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ServicePrev = ({ link, image, header, text }) => {
  return (
    <article className="flex flex-col max-w-[340px]">
      <AnchorLink href={link}>
        <img className="rounded-md" src={image} alt={header}></img>
      </AnchorLink>
      <h2 className="my-2 md:my-4 uppercase">{header}</h2>
      <p>{text}</p>
    </article>
  );
};

export default ServicePrev;
