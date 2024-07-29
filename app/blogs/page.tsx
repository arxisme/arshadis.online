

import NavBar from "@/app/components/NavBar";
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
        
      </div>
    </main>
  );
}
