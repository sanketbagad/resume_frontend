"use client";

import Image from "next/image";
import { Navbar } from "../_components/Navbar";
import { SignUp as ClerkSignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <main className="w-full flex">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <div className="flex items-center justify-center">
            <Image
              src="/resumee.PNG"
              width={200}
              alt="Resume.in"
              height={70}
            />
            <h2 className="text-white text-3xl font-bold">Resume.in</h2>
            </div>
            <div className=" mt-16 space-y-3">
              <h3 className="text-white text-3xl font-bold">
                Build your Resume in minutes
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features || No credit
                card required || Best ATS friendly templates
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <Image
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                  alt="Resume.in"
                />
                <Image
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                  alt="Resume.in"
                />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                  alt="Resume.in"
                />
                <Image
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                  alt="Resume.in"
                />
                <Image
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                  alt="Resume.in"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              filter: "blur(118px)",
            }}
          ></div>
        </div>
        <div className="flex-1 flex items-center justify-center h-screen">
          <div className="flex-1 flex items-center justify-center h-screen bg-gray-900">
            <ClerkSignUp
              appearance={{
                baseTheme: dark,
              }}
              afterSignUpUrl={"/dashboard"}
              afterSignInUrl={"/dashboard"}
              redirectUrl={"/dashboard"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
