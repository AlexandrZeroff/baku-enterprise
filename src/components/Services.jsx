import React from "react";
import Service from "../Snippets/Service";
import pic1 from "../assets/service1.jpg";
import pic2 from "../assets/service2.jpg";
import pic3 from "../assets/service3.jpg";
import pic4 from "../assets/service4.jpg";

const Services = () => {
  const service1 = [
    {
      header: "Business processes description",
      text: "Detailed business process descriptions are essential for businesses to operate effectively, meet their goals, and stay competitive in today's fast-paced business environment.",
    },
    {
      header: "RACI",
      text: "RACI is an important tool for businesses as it helps to improve clarity, collaboration, and efficiency in business processes, ultimately leading to better decision-making and improved business outcomes.",
    },
    {
      header: "Balanced scorecard",
      text: "A balanced scorecard is a powerful tool for businesses, as it helps to align activities with strategy, improve performance, and make informed decisions, ultimately leading to greater success.",
    },
    {
      header: "BPMN",
      text: "BPMN is a valuable tool for businesses, as it helps to improve communication, collaboration, and understanding of business processes, ultimately leading to improved efficiency and productivity.",
    },

    {
      header: "KPI",
      text: "KPIs are a crucial tool for businesses, as they provide a way to measure performance, set goals, and make data-driven decisions, ultimately leading to improved efficiency and success.",
    },
    {
      header: "OKR",
      text: "OKRs are an important tool for businesses, as they help to align efforts, improve focus, and track progress, ultimately leading to improved performance and greater success.",
    },
  ];
  const service2 = [
    {
      header: "Custom software development",
      text: "Bring your software product ideas to life, improve the quality of your existing product, and reduce time-to-market and development costs with our services.",
    },
    {
      header: "Software enhancement and modernization",
      text: "Custom software developers modernize and upgrade your software by using the latest techniques to fill the gaps in your operations. If necessary, they create an effective software solution from scratch, which best meets your current business needs.",
    },
    {
      header: "Enterprise software development",
      text: "Naxol’s custom software developers help large organizations achieve long-term success by reengineering technical solutions of various complexities. This increases flexibility and business efficiency.",
    },
  ];
  const service3 = [
    {
      header: "Hiring plan creation",
      text: "The full-cycle process from selecting tools and methods for a recruitment process, to determining the requirements for each position. Along with advising on job description preparation and the design of an onboarding process. All of these are based on an analysis of recruitment needs and skill gaps.",
    },
    {
      header: "Development of training materials and plans",
      text: "Improve job performance and create a better understanding of the team. Providing well-designed and effective training materials and plans can improve employee satisfaction and motivation, leading to higher engagement and improved outcomes.",
    },
    {
      header: "Development of corporate policies",
      text: "Company policies are created to establish expectations and provide guidance on consistently handling workplace situations. Although most company policies are not all-encompassing, they provide direction regarding what is appropriate and inappropriate or unacceptable behavior. Company policies help maintain order within the organization and ensure that people are treated fairly and equally. Policies also help employees understand what is expected of them.",
    },
    {
      header: "Recommendations on personnel training conducting",
      text: "Personnel training is an important aspect of employee development and organizational success, and conducting regular training programs can lead to improved job performance, enhanced career development, and better overall outcomes.",
    },
    {
      header: "Personnel assessment",
      text: "Baku Enterprise helps with a systematic approach to gathering information about individuals. This information is used to make employment or career-related decisions about applicants and employees.",
    },
  ];
  const service4 = [
    {
      header: "Online courses",
      text: "Explore new sales techniques, upgrade your digital sales skills, or start from the very beginning with the fundamentals of sales. The online courses are tailored for any level of expertise. Choose your course today by contacting us for more details.",
    },
    {
      header: "Personal consultations",
      text: "Customized and personal approach for any sales case. We provide analysis of the sales metrics and analytics and will help you create the needed sales planning and strategy.",
    },
  ];
  return (
    <section id="services-detailed">
      <Service
        id="business-consulting"
        serviceTexts={service1}
        image={pic1}
        header="Business Consulting"
        reversed={false}
      />
      <Service
        id="custom-software-development"
        serviceTexts={service2}
        image={pic2}
        header="Custom software development"
        reversed={true}
      />
      <Service
        id="hr-consulting"
        serviceTexts={service3}
        image={pic3}
        header="HR consulting"
        reversed={false}
      />
      <Service
        id="sales-training"
        serviceTexts={service4}
        image={pic4}
        header="Sales training"
        reversed={true}
      />
    </section>
  );
};

export default Services;
