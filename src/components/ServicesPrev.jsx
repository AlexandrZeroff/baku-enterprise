import React from "react";
import ServicePrev from "../Snippets/ServicePrev";
import pic1 from "../assets/service1prev.jpg";
import pic2 from "../assets/service2prev.jpg";
import pic3 from "../assets/service3prev.jpg";
import pic4 from "../assets/service4prev.jpg";

const ServicesPrev = () => {
  return (
    <section id="services" className="py-4">
      <div className="grid grid-cols-2 gap-4 md:flex justify-center flex-wrap">
        <ServicePrev
          link="#business-consulting"
          image={pic1}
          header="Business Consulting"
          text="Baku Enterprise offers tailored business consulting and advisory services through flexible consultations to help navigate your business in the right direction"
        />
        <ServicePrev
          link="#custom-software-development"
          image={pic2}
          header="Custom software development"
          text="Full-cycle development, from your idea to the final product."
        />
        <ServicePrev
          link="#hr-consulting"
          image={pic3}
          header="HR consulting"
          text="Cost-effective human resource solutions for start-up, small, medium, and large organizations."
        />
        <ServicePrev
          link="#sales-training"
          image={pic4}
          header="Sales training"
          text="With these effective sales training courses, you will learn to generate more leads, resulting in increased sales performance."
        />
      </div>
      <div className="h-8 border-b border-slate-300"></div>
    </section>
  );
};

export default ServicesPrev;
