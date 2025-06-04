import Image from "next/image";
import { Montserrat, Noto_Sans } from "next/font/google";
import React from "react";
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
            <p className="">scale ai</p>
            <div className="flex">
              <a>2024 - 2025</a>
            </div>
          </div>
          <p className="text-mygray">contractor</p>

          <div className="font-bold pt-10 pb-5 text-mygreen">PROJECTS</div>
          
          <div className="flex justify-between items-center">
            <p className="">mobile movie application</p>
            <div className="flex">
              <a
                href="https://github.com/ijjones"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">expo, react native, typescript, appwrite, tailwind </p>

          <div className="flex justify-between items-center">
            <p className="pt-5">us suicide risk factors analysis</p>
            <div className="flex">
              <a
                href="https://github.com/ijjones"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">python, pandas, numpy, matplotlib</p>

          <div className="flex justify-between items-center">
            <p className="pt-5">social media app</p>
            <div className="flex">
              <a
                href="https://social-app-phi-bice.vercel.app/"
                className="ml-4 mr-2 hover:underline"
              >
                live
              </a>
              <a
                href="https://github.com/ijjones/social-app"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">next.js, mongodb, clerk, typescript, tailwind</p>
          
          <ul className="pt-10 flex flex-row">
            <a href="https://github.com/ijjones" className="pr-5">
              <Image src="/github.svg" alt="github" width={30} height={30} />
            </a>

            <a href="https://www.linkedin.com/in/ijjones/" className="pr-5">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
