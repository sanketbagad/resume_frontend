"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { Dropdown } from "./DropDown";

export const Navbar = () => {
  const [state, setState] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features", path: "/features" },
    { title: "Careers", path: "/careers" },
    { title: "Contact", path: "/contact" },
    { title: "Pricing", path: "/pricing" },
  ];

  const afterLoginNavigation = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "ATS Checker", path: "/resume-parser" },
    { title: "Resume Builder", path: "/resume-import" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href={isSignedIn ? "/dashboard" : "/"}>
            <Image
              src="/resumee.png"
              width={120}
              height={50}
              alt="Resume.in"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {isSignedIn ? (
              afterLoginNavigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-500 hover:text-indigo-600">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })
            ) : (
              <>
                {" "}
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-500 hover:text-indigo-600"
                    >
                      <Link href={item.path} className="block">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </>
            )}
            {isSignedIn && <Dropdown />}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              {!isSignedIn ? (
                <>
                  <li>
                    <Link
                      href="/sign-in"
                      className="block py-3 text-center text-gray-500 hover:text-indigo-600 border rounded-lg md:border-none"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sign-up"
                      className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      Sign in
                    </Link>
                  </li>
                </>
              ) : (
                <div className="flex items-center gap-x-6">
                  <UserButton
                    afterSignOutUrl="/"
                    showName
                    appearance={{
                      elements: {
                        userButtonBox: "text-white",
                        userButtonOuterIdentifier: "text-gray-200",
                      },
                    }}
                  />
                </div>
              )}

            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
