"use client"; // this is a client component
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const hoverStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.4em",
  textDecorationThickness: 1.5,
  textDecorationColor: "#4F7942",
};

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const [hovered, setHovered] = useState<string>();

  return (
    <ul
      className="flex flex-col justify-end gap-1"
      onMouseLeave={() => setHovered(undefined)}
    >
      <li
        className={`relative text-right ${
          pathname === "/" ? "text-mygreen" : "text-black"
        }`}
        onMouseEnter={() => setHovered("about")}
        style={hovered === "about" ? hoverStyle : undefined}
      >
        <a href="/">about</a>
      </li>

      <li
        className={`text-right ${
          pathname === "/experience" ? "text-mygreen" : "text-black"
        }`}
        onMouseEnter={() => setHovered("experience")}
        style={hovered === "experience" ? hoverStyle : undefined}
      >
        <a href="/experience">experience</a>
      </li>

      <li
        className={`text-right ${
          pathname === "/contact" ? "text-mygreen" : "text-black"
        }`}
        onMouseEnter={() => setHovered("contact")}
        style={hovered === "contact" ? hoverStyle : undefined}
      >
        <a href="mailto:ijjones@ucsd.edu">contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
