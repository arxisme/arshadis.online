/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Michroma } from "next/font/google";
import LottieAnimation from "@/app/components/LottieAnimation";
import NavBar from "@/app/components/NavBar";
import LottieEmail from "./components/LottieEmail";
import LottieAbout from "./components/LottieAbout";
import ResumeDownloadButton from "./components/ResumeDownloadButton";

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
              <h1
                className={`max-md:text-lg text-2xl m-2 mx-4 max-md:mt-9 text-secondary ${michroma.className}`}
              >
                Hi, I am
              </h1>
              <h1
                className={`max-lg:text-3xl text-5xl m-2 text-accent mt-6 ${michroma.className}`}
              >
                Arshad Ahmed,
              </h1>
              <h1
                className={`text-4xl max-md:text-2xl m-2 text-primary ${michroma.className}`}
              >
                Software Engineer
              </h1>
              <h1
                className={`max-md:text-lg text-2xl m-2 mt-7 text-secondary ${michroma.className}`}
              >
                and I
              </h1>
              <h1
                className={`max-md:text-3xl text-5xl m-2 mt-7 text-accent ${michroma.className}`}
              >
                Design and Develop
              </h1>
              <h1
                className={`max-md:text-2xl text-4xl m-2 text-primary ${michroma.className}`}
              >
                websites.
              </h1>
              <h1
                className={`max-md:text-lg text-xl m-2 mt-9 text-secondary ${michroma.className}`}
              >
                also, I write sometimes
              </h1>
              <h1
                className={`max-md:text-lg text-xl m-2 mt-2 text-secondary ${michroma.className}`}
              >
                check out my
                <a
                  href="/blogs"
                  className="underline max-md:text-xl text-2xl ml-2 text-info"
                >
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
            <div className="w-full m-2 items-center  justify-around">
              <LottieAbout />
            </div>
            <div className="bg-pink-0 w-full  leading-5">
              <div className="w-full flex items-center  align-middle max-md:mt-9 justify-between">
                <h1
                  className={`max-md:text-xl w-fit p-5 shadow-md shadow-primary text-4xl m-2 mx-4 rounded-b-xl text-primary ${michroma.className}`}
                >
                  About me
                </h1>

                <ResumeDownloadButton />
              </div>

              <p
                className={`max-md:text-sm text-md m-2 mx-4 whitespace-pre-wrap max-md:mt-9 text-accent ${michroma.className}`}
              >
                I'm a software engineer who loves creating and designing awesome
                websites. I'm pretty good at{" "}
                <span className="text-info"> solving problems</span> and making
                things work smoothly.
              </p>
              <div className="h-5"></div>
              <h1
                className={`max-md:text-sm text-2xl m-2 mx-4 max-md:mt-9 pb-3 text-primary ${michroma.className}`}
              >
                My Skills include:
              </h1>

              <p
                className={`max-md:text-sm text-md m-2 mx-4 whitespace-pre-wrap max-md:mt-5 text-accent ${michroma.className}`}
              >
                <span className="text-primary">🅞 </span> Full-stack development
                using <span className="text-info"> React</span>,{" "}
                <span className="text-info"> Nodejs</span>,{" "}
                <span className="text-info"> Laravel</span> ,
                <span className="text-info"> Next js</span>{" "}
              </p>
              <div className=""></div>
              <p
                className={`max-md:text-sm text-md m-2 mx-4 whitespace-pre-wrap max-md:mt-9 text-accent ${michroma.className}`}
              >
                <span className="text-primary">🅞 </span> Programming languages :{" "}
                <span className="text-info"> C++</span>,{" "}
                <span className="text-info"> Rust </span>,{" "}
                <span className="text-info"> Java</span>{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="flex max-md:flex-col items-center min-h-screen pt-7 align-middle justify-end h-full w-full">
            <div className=" flex justify-center p-5 w-full">
              <div className="flex w-full max-w-md flex-col">
                <h1
                  className={`max-md:text-xl w-fit mb-7 p-5  mx-0 shadow-md shadow-primary text-4xl m-2 rounded-b-xl  max-md:mt-9  text-primary ${michroma.className}`}
                >
                  Contact me
                </h1>
                <div className="h-5"></div>
                <label className="input input-ghost  shadow-md shadow-primary input-bordered flex items-center mb-5 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="#9fe88d"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow text-neutral-content"
                    id="name"
                    placeholder="Name"
                  />
                </label>
                <label className="input input-bordered shadow-md shadow-primary focus:border-green-50 flex items-center text-pretty w-full   mb-5 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="#9fe88d"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    id="email"
                    type="text"
                    className="grow text-neutral-content "
                    placeholder="Email"
                  />
                </label>

                <textarea
                  className="textarea shadow-md shadow-primary textarea-bordered text-neutral-content mb-5 h-36 text-pretty"
                  placeholder="Write your message"
                ></textarea>
                <button className="btn btn-primary "> submit </button>
              </div>
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
