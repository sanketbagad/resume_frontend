import Image from "next/image";

export const Hero = () => {
  return (
    <section>
      <div className=" mx-auto px-4 py-28 gap-12 bg-gray-900 text-gray-100 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            Start your journey
          </h1>
          <h2 className="text-4xl text-gray-400 font-extrabold mx-auto md:text-5xl">
            Design your resume with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              the most reliable and efficient tool
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Just a few clicks and you will have a professional resume ready to be
            shared with your future employer.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="/resume-import"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Start Building
            </a>
            <a
              href="resume-parser"
              className="block py-2 px-4 text-gray-400 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Check ATS
            </a>
          </div>
        </div>
        <div className="mt-14">
          <video
            src="/Resume_IN.mp4"
            className="w-full shadow-lg rounded-lg border"
            width={1200}
            height={200}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};
