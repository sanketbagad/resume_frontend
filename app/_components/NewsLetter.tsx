"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export const NewsLetter = () => {
  const [loading, setLoading] = useState(false as boolean);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://resume-backend-ldlm.onrender.com/api/newsletter",
        data
      );
      if (response) {
        setLoading(false);
        toast.success("You have been subscribed successfully");
      }
    } catch (error) {
      setLoading(false);
      toast.error("You already subscribed");
    }
  };
  return (
    <section>
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl text-white font-bold">
              Subscribe to our newsletter
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
          </div>
          <div className="mt-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
            >
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="text-gray-500 w-full p-2 outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="p-2 px-3 rounded-lg font-medium text-white bg-gray-600 hover:bg-gray-500 active:bg-gray-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
              No spam ever, we are care about the protection of your data. Read
              our{" "}
              <a className="underline" href="javascript:void(0)">
                {" "}
                Privacy Policy{" "}
              </a>
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        ></div>
      </div>
    </section>
  );
};
