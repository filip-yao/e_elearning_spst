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
        <div className=" gap-4 bg-gray-400 bg-opacity-15 m-8 h- p-3 rounded-2xl border-2 border-gray-500 h-screen">
          <Title text="O Vzniku"></Title>
          <p className={` m-8 text-m  ${rubik.className}`}>
          Projekt je dílem nadšení studenta technického lycea.
          Má za cíl udělat index všech ruzných zdrojů pro výuku dle platných norem.
           Tak aby bylo vše lehce dohledatelné a přehledné.</p>
           <Title text="Použité technologie"></Title>
           <div className="flex flex-wrap m-8 gap-8 p-3 h-32 justify-center  ">
          <img className=" p-1 h-32"
            src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
             alt="logo react"/>
             <img className=" p-4 h-32  "
            src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
             alt="logo next.js"/>
             <img className=" p-7 h-32 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TypeScript_Logo_%28Blue%29.svg/2560px-TypeScript_Logo_%28Blue%29.svg.png"
             alt="logo typescript"/>
            

           </div>
        </div>
     </div>
      <Nohy/>
    </div>
  );
}