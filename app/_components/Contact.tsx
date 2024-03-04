"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false as boolean);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://resume-backend-ldlm.onrender.com/api/contact",
        data
      );
      if (response) {
        setLoading(false);
        toast.success("Your message has been sent successfully");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong, please try again");
    }
  };

  return (
    <main className="relative py-28 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">Contact</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>IN</option>
                  </select>
                </div>
                <input
                  {...register("mobile", { required: true })}
                  type="number"
                  placeholder="+91 (555) 000-000"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                {...register("message", { required: true })}
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>
  );
};
