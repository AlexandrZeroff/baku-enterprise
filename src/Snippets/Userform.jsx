import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";

const Userform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sendSuccess, setSendSuccess] = useState(false);

  const sendFormData = async (data, error) => {
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );
    reset();
    setSendSuccess(true);
  };

  return (
    <form
      onSubmit={handleSubmit(sendFormData)}
      className="userform flex flex-col"
    >
      <input
        placeholder="Name*"
        type="text"
        {...register("name", { maxLength: 30, required: true })}
      />
      {errors.email?.type === "required" && (
        <span className="error-span">Please, enter your name</span>
      )}
      <input
        placeholder="Email*"
        type="email"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.type === "required" && (
        <span className="error-span">Please, enter your email</span>
      )}
      {errors.email?.type === "pattern" && (
        <span className="error-span">Please, enter valid email</span>
      )}
      <input
        aria-multiline
        type="text"
        placeholder="Message"
        defaultValue=""
        {...register("message")}
      />
      {sendSuccess && (
        <span className="success-span">
          Thanks, your data was processed successfully!
        </span>
      )}
      <button type="submit" className="bg-black rounded-full py-4 text-lg mt-4 w-48 text-white hover:bg-white hover:text-black">
        FREE DEMO
      </button>
    </form>
  );
};

export default Userform;
