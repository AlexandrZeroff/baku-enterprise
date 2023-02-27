import React from "react";
import ServiceText from "./ServiceText";

const Service = ({ id, serviceTexts, image, header, reversed }) => {
  return (
    <article id={id} className="py-8 lg:my-16 flex flex-col">
      <div className="lg:grid grid-cols-2 gap-4">
        {reversed ? (
          <img
            className="w-full max-w-xl lg:hidden mx-auto"
            src={image}
            alt={header}
          ></img>
        ) : (
          <img
            className="w-full max-w-xl lg:max-w-none mx-auto"
            src={image}
            alt={header}
          ></img>
        )}
        <div className="my-4 md:mt-12 lg:mt-0 sm:grid sm:grid-cols-2 sm:gap-4">
          {serviceTexts.map((serviceText, key) => (
            <ServiceText
              key={key}
              header={serviceText.header}
              text={serviceText.text}
            />
          ))}
        </div>
        {reversed ? (
          <img
            className="hidden w-full max-w-xl lg:block lg:max-w-none mx-auto"
            src={image}
            alt={header}
          ></img>
        ) : (
          <></>
        )}
      </div>
      <div className="h-4 md:h-8 lg:h-12 border-b border-slate-300"></div>
    </article>
  );
};

export default Service;
