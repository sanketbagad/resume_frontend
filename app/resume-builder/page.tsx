"use client";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import { ResumeForm } from "../_components/ResumeForm";
import { Resume } from "../_components/Resume";
import { RedirectToSignIn, RedirectToSignUp, SignedIn, SignedOut } from "@clerk/nextjs";
import { Navbar } from "../_components/Navbar";

export default function Create() {
  return (
    <>
      <Navbar />
      <SignedIn>
        <Provider store={store}>
          <main className="relative h-full w-full overflow-hidden bg-gray-50 mt-5">
            <div className="grid grid-cols-3 md:grid-cols-6">
              <div className="col-span-3">
                <ResumeForm />
              </div>
              <div className="col-span-3">
                <Resume />
              </div>
            </div>
          </main>
        </Provider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </>
  );
}
