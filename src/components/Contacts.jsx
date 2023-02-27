import React from "react";
import Userform from "../Snippets/Userform";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="rounded-md bg-th-orange p-10 flex flex-col items-center"
    >
      <article className="max-w-sm">
        <h2 className="uppercase">Ready for the next step? Contact us today</h2>
        <div className="h-4 border-b border-slate-300 mb-4"></div>
        <Userform />
      </article>
    </section>
  );
};

export default Contacts;
