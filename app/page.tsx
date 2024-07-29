import LogoBig from "./components/LogoBig";
import LottieAnimation from "./components/LottieAnimation";

import NavBar from "./components/NavBar";
import { Michroma, Petit_Formal_Script } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className=" min-h-screen md:flex justify-around  ">
      <div className="box-content  flex flex-col  rounded-xl max-w-screen-2xl max-2xl:max-w-screen-lg w-full ">
        <NavBar></NavBar>
        <div className="flex max-md:flex-col items-center align-middle justify-end h-full  w-full">
          <div className="bg-pink-0   w-full  ">
            <h1
              className={` max-md:text-lg text-2xl m-2 mx-4 max-md:mt-9  text-secondary ${michroma.className}`}
            >
              Hi, I am{" "}
            </h1>
            <h1
              className={` max-lg:text-3xl   text-5xl m-2 text-accent mt-6 ${michroma.className}`}
            >
              Arshad Ahmed,{" "}
            </h1>
            <h1
              className={` text-4xl max-md:text-2xl m-2 text-primary ${michroma.className}`}
            >
              Software Engineer{" "}
            </h1>
            <h1
              className={` max-md:text-lg text-2xl m-2 mt-7 text-secondary ${michroma.className}`}
            >
              and I{" "}
            </h1>
            <h1
              className={` max-md:text-3xl text-5xl m-2  mt-7 text-accent ${michroma.className}`}
            >
              Design and Develop{" "}
            </h1>
            <h1
              className={` max-md:text-2xl text-4xl m-2  text-primary ${michroma.className}`}
            >
              websites.{" "}
            </h1>
            <h1
              className={` max-md:text-lg text-xl m-2 mt-9 text-secondary ${michroma.className}`}
            >
              also, I    write sometimes{" "}
            </h1>
            <h1
              className={`max-md:text-lg text-xl m-2 mt-2 text-secondary ${michroma.className}`}
            >
              check out my{" "}
              <a
                href="#"
                className="underline max-md:text-xl text-2xl ml-2 text-info"
              >
                Blogs
              </a>{" "}
            </h1>
          </div>

          <div className=" w-full m-2 items-center  justify-around ">
            <LottieAnimation/>
          </div>
        </div>
      </div>
    </main>
  );
}
