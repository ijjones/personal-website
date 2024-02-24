import Image from "next/image";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className="max-w-2xl w-full">
      <div className="w-full">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between ">
            <p className="custom-text-18">isaiah jones</p>
            <Navbar />
          </div>

          <div className="font-bold pt-10 pb-3 text-mypink tracking-widest text-lg">
            hello
          </div>
          <p>[ he/him ]</p>

          <p className="pt-10">
            stuff
          </p>
          <p className="pt-10">
            stuff{" "}
          </p>

          <p className="pt-10">
            stuff,{" "}
            <span className="font-bold">
              <a href="mailto:ijjones@ucsd.edu">connect with me here.</a>
            </span>
          </p>

          <ul className="pt-10 flex flex-row">
            <a href="https://github.com/ij-jones" className="pr-5">
              <img src="/github.svg" alt="github" width={30} height={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/ij-jones/"
              className="pr-5"
            >
              <img src="/linkedin.svg" alt="linkedin" width={30} height={30} />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
