import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import Title from "@/components/Title";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Aboutus() {
  /* definuju funkci před html */
  const gay = () => {
    console.log(
      "If you're gay, then you're gay \n Don't pretend that you're straight \n You can be who you are any day of the week \n You are unlike the others \n So strong and unique"
    );
    
  };

  const gayhlas = () => {
    new Audio("/gay.mp3").play();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Blanikpico nazev="O PROJEKTU" />
      </main>
      <div className="">
        <div className=" gap-4 bg-gray-400 bg-opacity-15 m-8 h- p-3 rounded-2xl border-2 border-gray-500 h-screen ">
          <Title text="O Vzniku"></Title>
          <p className={` m-2 text-m  ${rubik.className}`}>




            
          </p>
        </div>
     </div>
      <Nohy/>
    </div>
  );
}