import React from "react";
import { Michroma } from "next/font/google";

import LogoBig from "@/app/components/LogoBig";
import LottieAnimation from "@/app/components/LottieAnimation";
import NavBar from "@/app/components/NavBar";
import LottieEmail from "./components/LottieEmail";
import LottieAbout from "./components/LottieAbout";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen md:flex justify-around ">
      <div className="box-content flex flex-col rounded-xl max-w-screen-2xl max-2xl:max-w-screen-lg w-full">
        <NavBar />
        <section id="home">
           <div className="flex max-md:flex-col items-center min-h-screen align-middle justify-end h-full max-lg:pt-7 w-full">
          <div className="bg-pink-0 w-full">
            <h1 className={`max-md:text-lg text-2xl m-2 mx-4 max-md:mt-9 text-secondary ${michroma.className}`}>
              Hi, I am
            </h1>
            <h1 className={`max-lg:text-3xl text-5xl m-2 text-accent mt-6 ${michroma.className}`}>
              Arshad Ahmed,
            </h1>
            <h1 className={`text-4xl max-md:text-2xl m-2 text-primary ${michroma.className}`}>
              Software Engineer
            </h1>
            <h1 className={`max-md:text-lg text-2xl m-2 mt-7 text-secondary ${michroma.className}`}>
              and I
            </h1>
            <h1 className={`max-md:text-3xl text-5xl m-2 mt-7 text-accent ${michroma.className}`}>
              Design and Develop
            </h1>
            <h1 className={`max-md:text-2xl text-4xl m-2 text-primary ${michroma.className}`}>
              websites.
            </h1>
            <h1 className={`max-md:text-lg text-xl m-2 mt-9 text-secondary ${michroma.className}`}>
              also, I write sometimes
            </h1>
            <h1 className={`max-md:text-lg text-xl m-2 mt-2 text-secondary ${michroma.className}`}>
              check out my
              <a href="/blogs" className="underline max-md:text-xl text-2xl ml-2 text-info">
                Blogs
              </a>
            </h1>
          </div>
          <div className="w-full max-lg:m-2 items-center justify-around">
            <LottieAnimation />
          </div>
        </div>
        </section>
       
        <section id="about">
          <div className="flex max-md:flex-col items-center min-h-screen pt-7 align-middle justify-end h-full w-full">
          <div className="w-full m-2 items-center justify-around">
              <LottieAbout />
            </div>
            <div className="bg-pink-0 w-full">
              <h1 className={`max-md:text-lg text-2xl m-2 mx-4 max-md:mt-9 text-secondary ${michroma.className}`}>
                Hi, I am
              </h1>
              <h1 className={`max-lg:text-3xl text-5xl m-2 text-accent mt-6 ${michroma.className}`}>
                Arshad Ahmed,
              </h1>
              <h1 className={`text-4xl max-md:text-2xl m-2 text-primary ${michroma.className}`}>
                Software Engineer
              </h1>
              <h1 className={`max-md:text-lg text-2xl m-2 mt-7 text-secondary ${michroma.className}`}>
                and I
              </h1>
              <h1 className={`max-md:text-3xl text-5xl m-2 mt-7 text-accent ${michroma.className}`}>
                Design and Develop
              </h1>
              <h1 className={`max-md:text-2xl text-4xl m-2 text-primary ${michroma.className}`}>
                websites.
              </h1>
              <h1 className={`max-md:text-lg text-xl m-2 mt-9 text-secondary ${michroma.className}`}>
                also, I write sometimes
              </h1>
              <h1 className={`max-md:text-lg text-xl m-2 mt-2 text-secondary ${michroma.className}`}>
                check out my
                <a href="#" className="underline max-md:text-xl text-2xl ml-2 text-info">
                  Blogs
                </a>
              </h1>
            </div>
           
          </div>
        </section>
        <section id="contact">
          <div className="flex max-md:flex-col items-center min-h-screen pt-7 align-middle justify-end h-full w-full">
            <div className="bg-pink-0 w-full">
              <h1 className={`max-md:text-lg text-2xl m-2 mx-4 max-md:mt-9 text-secondary ${michroma.className}`}>
                Contact
              </h1>
              <h1 className={`max-lg:text-3xl text-5xl m-2 text-accent mt-6 ${michroma.className}`}>
                Arshad Ahmed,
              </h1>
              <h1 className={`text-4xl max-md:text-2xl m-2 text-primary ${michroma.className}`}>
                Software Engineer
              </h1>
              <h1 className={`max-md:text-lg text-2xl m-2 mt-7 text-secondary ${michroma.className}`}>
                and I
              </h1>
              <h1 className={`max-md:text-3xl text-5xl m-2 mt-7 text-accent ${michroma.className}`}>
                Design and Develop
              </h1>
              <h1 className={`max-md:text-2xl text-4xl m-2 text-primary ${michroma.className}`}>
                websites.
              </h1>
              <h1 className={`max-md:text-lg text-xl m-2 mt-9 text-secondary ${michroma.className}`}>
                also, I write sometimes
              </h1>
              <h1 className={`max-md:text-lg text-xl m-2 mt-2 text-secondary ${michroma.className}`}>
                check out my
                <a href="#" className="underline max-md:text-xl text-2xl ml-2 text-info">
                  Blogs
                </a>
              </h1>
            </div>
            <div className="w-full m-2 items-center justify-around">
              <LottieEmail />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
