"use client";
import React, { useState } from "react";
import { Michroma } from "next/font/google";


import Logo from "@/app/components/Logo";
import HamburgerMenu from "./HamburgerMenu";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-full flex justify-between p-2 m-1   rounded-lg text-accent text-xs 2xl:text-base  ${michroma.className}`}
    >
      <div className="text-base flex flex-col max-lg:justify-around">
        <Logo />
      </div>
      <div className="lg:hidden ">
        <HamburgerMenu/>
        
        
      </div >

      <div className="flex w-1/5  max-lg:hidden items-center justify-between ">
        <div className="relative group h-7">
          <div className="underline relative z-10 cursor-pointer">Blogs</div>
          <div className="absolute inset-0 bg-accent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
        </div>

        <div className="relative group h-7">
          <div className="underline relative z-10 cursor-pointer">About</div>
          <div className="absolute inset-0 bg-accent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
        </div>
        <div className="relative group h-7">
          <div className="underline relative z-10 cursor-pointer">Contact</div>
          <div className="absolute inset-0 bg-accent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
