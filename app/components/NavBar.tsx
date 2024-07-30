"use client";
import React, { useState } from "react";
import { Michroma } from "next/font/google";
import Link from "next/link";

import Logo from "@/app/components/Logo";
import HamburgerMenu from "./HamburgerMenu";

import { NextResponse } from "next/server";
import { redirect } from "next/navigation";




const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});
const res = NextResponse
const NavBar = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center p-2 m-1 rounded-lg text-accent text-xs 2xl:text-base ${michroma.className} z-50`}
    >
      <div className="w-full max-w-screen-2xl flex justify-between">
        <div className="text-base flex flex-col max-lg:justify-around">
          <Logo />
        </div>
        <div className="lg:hidden">
          <HamburgerMenu />
        </div>
        <div className="flex w-1/4 max-lg:hidden items-center  justify-between">
          <div className="relative group h-7 items-center">
            <a
              className=" relative z-100 text-info hover:text-lg ease-in-out duration-300 custom-shadow p-1 px-4 rounded-lg cursor-pointer"
              style={{
                boxShadow: "0 4px 6px -1px rgba(0, 123, 255, 0.5)",
              }}
              href="/blogs"
              
            >
              Blogs
            </a>
            {/* <div className="absolute inset-0 bg-info blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div> */}
          </div>
          <div className="relative group h-7">
            <Link href="#home" passHref>
              <div className="underline relative z-10 cursor-pointer">home</div>
            </Link>
            <div className="absolute inset-0 bg-accent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
          </div>
          <div className="relative group h-7">
            <Link href="#about" passHref>
              <div className="underline relative z-10 cursor-pointer">
                About
              </div>
            </Link>
            <div className="absolute inset-0 bg-accent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
          </div>
          <div className="relative group h-7">
            <Link href="#contact" passHref>
              <div className="underline relative z-10 cursor-pointer">
                Contact
              </div>
            </Link>
            <div className="absolute inset-0 bg-accent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
