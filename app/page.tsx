import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <div className="max-w-2xl w-full">
      <div className="w-full">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between ">
            <p className="custom-text-18">isaiah jones</p>
            <Navbar />
          </div>

          <div className="font-bold pt-10 pb-3 text-mygreen tracking-widest text-lg">
            hello, hola
          </div>
          <p>[ he/him ]</p>

          <p className="pt-10">
            i&apos;m currently a mathematics - computer science major at
            university of california, san diego. i have a passion for coding,
            learning, and building.
          </p>
          <p className="pt-10"> when i&apos;m not programming you can catch me making music or playing sports. </p>

          <p className="pt-10">
            i&apos;m always open to exploring new opportunities,{" "}
            <span className="font-bold">
              <a href="mailto:ijjones@ucsd.edu">connect with me here.</a>
            </span>
          </p>

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
