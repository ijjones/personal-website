import Image from "next/image";
import { Montserrat, Noto_Sans } from "next/font/google";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const radio = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="max-w-2xl w-full">
      <div className="w-full">
        <div className="min-h-screen ">
          <div className="flex flex-row justify-between ">
            <p className="custom-text-18">isaiah jones</p>
            <Navbar />
          </div>

          <div className="font-bold pt-10 pb-5 text-mygreen">WORK</div>

          <div className="flex justify-between items-center">
            <p className="">e3 civic high</p>
            <div className="flex">
              <a>2019 - 2020</a>
            </div>
          </div>
          <p className="text-mygray">office assistant</p>

          <div className="font-bold pt-10 pb-5 text-mygreen">PROJECTS</div>
          <div className="flex justify-between items-center">
            <p className="">social media app</p>
            <div className="flex">
              <a
                href="https://social-app-phi-bice.vercel.app/"
                className="ml-4 mr-2 hover:underline"
              >
                live
              </a>
              <a
                href="https://github.com/ij-jones/social-app"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">next.js, mongodb, typescript, tailwind</p>

          <div className="flex justify-between items-center">
            <p className="pt-5">python aim trainer</p>
            <div className="flex">
              <a
                href="https://github.com/ij-jones/aim-trainer"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">python, pygame</p>

          <div className="flex justify-between items-center">
            <p className="pt-5">us suicide risk factors analysis</p>
            <div className="flex">
              <a
                href="https://github.com/ij-jones/aim-trainer"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">python, pandas, numpy, matplotlib</p>

          <ul className="pt-10 flex flex-row">
            <a href="https://github.com/ij-jones" className="pr-5">
              <img src="/github.svg" alt="github" width={30} height={30} />
            </a>

            <a href="https://www.linkedin.com/in/ij-jones/" className="pr-5">
              <img src="/linkedin.svg" alt="linkedin" width={30} height={30} />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
