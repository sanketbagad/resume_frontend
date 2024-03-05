"use client";

import { Navbar } from "@/app/_components/Navbar";
import { Uploader } from "@/app/_components/Uploader";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { set, useForm } from "react-hook-form";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebaseCong } from "@/app/firebase/config";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { FallingLines } from "react-loader-spinner";


export default function CareerID() {
  // get the name from the URL

  const name = useParams().name;
  const [fileUrl, setFileUrl] = useState("" as string);
  const [success, setSuccess] = useState(false as boolean);
  const [fileName, setFileName] = useState("" as string);
  const [loading, setLoading] = useState(false as boolean);
  const [fileLoading, setFileLoading] = useState(false as boolean);

  const { register, handleSubmit, setValue } = useForm();

  const storage = getStorage(firebaseCong);

  const { user } = useUser();

  console.log(user);
  // 'file' comes from the Blob or File API

  useEffect(() => {
    if (user) {
      setValue("email", user.primaryEmailAddress?.emailAddress);
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
    }
  }, [user]);

  const onFileChange = (e: any) => {
    const file = e.target.files[0];
    const fileName = file.name + Date.now();
    const storageRef = ref(storage, fileName);
    setFileLoading(true);

    uploadBytes(storageRef, file).then((snapshot) => {
      // then get the download URL after the file is uploaded
      setFileUrl(
        "https://firebasestorage.googleapis.com/v0/b/resume-in.appspot.com/o/" +
          file.name +
          "?alt=media&token=" +
          snapshot.metadata.fullPath
      );
      setFileName(file.name);
      setFileLoading(false);
      setSuccess(true);

      toast.success("File uploaded successfully");
    }).catch((err) => {
      setFileLoading(false);
      toast.error("Something went wrong, please try again");
    });
  };

  const onSubmit = (data: any) => {
    if (!success) {
      toast.error("Please upload your resume");
      return;
    }
    setLoading(true);
    axios.post("https://resume-backend-ldlm.onrender.com/api/careers", {
        ...data,
        resume: fileUrl,
        jobTitle: name,
      })
      .then((res) => {
        setLoading(false);
        toast.success("Application submitted successfully");
      })
      .catch((err) => {
        setLoading(false);
        toast.success("You have already applied for this job before");
      });
  };

  return (
    <>
      <Navbar />
      <main className="py-14 bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 font-semibold">Resume.in Careers</h3>
            <p className="text-gray-400 text-3xl font-semibold sm:text-4xl">
              {name}
            </p>
            <p>
              We would love to have you on our team. Please fill out the form
              below to apply for the position.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  <label className="font-medium">First name</label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Last name</label>
                  <input
                    {...register("lastName", { required: true })}
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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
                    {...register("phone", { required: true })}
                    type="number"
                    placeholder="+91 000-000-000"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 justify-center">
                {fileLoading ? (
                <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                />
                ) 
                : ( 
                <Uploader
                  onFileChange={onFileChange}
                  success={success}
                  fileName={fileName}
                />
                )}
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
