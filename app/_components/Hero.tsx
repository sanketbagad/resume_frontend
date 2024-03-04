"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { Navbar } from "./Navbar";

export const Hero = () => {
  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Features", path: "/features" },
    { title: "Contact", path: "/contact" },
    { title: "Pricing", path: "/pricing" },
    { title: "Careers", path: "/careers" },
  ];

  const afterLoginNavigation = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "ATS Checker", path: "/ats-checker" },
    { title: "Resume Builder", path: "/resume-builder" },
    { title: "Contact", path: "/contact" },
  ];

  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const pathname = usePathname();

  return (
    <div className="bg-gray-900">
      <header>
        <Navbar />
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            {pathname === "/" && "Build your resume in minutes"}{" "}
            {pathname === "/features" && "Cool Features"}{" "}
            {pathname === "/contact" && "Any Queries?"}{" "}
            {pathname === "/pricing" && "Here's the pricing"}{" "}
            {pathname === "/careers" && "Join our team"}{" "}
            <br className="hidden lg:block" />
            <span className="text-indigo-400">
              {pathname === "/" && "Land your dream job"}
              {pathname === "/features" && "We have some cool features"}
              {pathname === "/contact" && "We are here to help"}
              {pathname === "/pricing" && "Pay as you grow"}
              {pathname === "/careers" &&
                "We are looking for talented individuals"}
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            {pathname === "/" &&
              "Create a professional resume in minutes, and land your dream job. No credit card required."}
            {pathname === "/features" &&
              "Here are some of the cool features we offer. Feel free to explore."}
            {pathname === "/contact" &&
              "Don't hesitate to contact us. We are here to help you."}
            {pathname === "/pricing" &&
              "A simple pricing model that scales with your business."}
            {pathname === "/careers" &&
              "We are looking for talented individuals to join our team. If you are passionate about what you do, we would like to hear from you."}
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              href={isSignedIn ? "/dashboard" : "/sign-up"}
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </Link>
            <Link
              href="/sign-in"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try it out
            </Link>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <Image
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            alt="Resume.in"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
};
