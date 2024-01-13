import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import Title from "@/components/Title";
import { PhosphorLogo } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Blanikpico nazev="O PROJEKTU" />
      </main>
      
      <div className="flex-1">
        <div className=" gap-4 bg-gray-400 bg-opacity-15 m-8  h-fit p-3 rounded-2xl border-2 border-gray-500 ">
          <Title text="O Vzniku"></Title>
          <p className={` m-8 text-m  ${rubik.className}`}>
          Projekt je dílem nadšení studenta technického lycea.
          Má za cíl udělat index všech ruzných zdrojů pro výuku dle platných norem.
           Tak aby bylo vše lehce dohledatelné a přehledné.</p>
           <Title text="Použité technologie"></Title>
          <div className="flex my-4 mx-12 gap-x-8 p-3  justify-center flex-wrap">
           
            <div className="flex items-center">
              <img className="w-24 m-10"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="logo react"/>
            </div>
          <div className="flex h-40 w-40 items-center ">
            <img className=" h-fit invert "
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="logo next.js"/>
          </div>
          <div className="flex h-40 w-40 p-10 items-center">
            <img className=" h-fit "
             src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
             alt="logo typescript"/>
          </div>
          <div className="flex h-40 w-40 items-center">
            <img className=" h-fit "
             src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.944c5d0ef628083bb316f9b3d643385c86bcdb3d.svg"
             alt="logo tailwind"/>
          </div>
          <div className="flex h-40 w-40 items-center">
            <img className=" h-fit invert "
             src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
             alt="logo vercel"/>
          </div>
          <div className="flex justify-evenly h-40 w-40 items-center">
            <PhosphorLogo size={68} weight="fill" />
          </div>
            
            
            

           </div>
        </div>
     </div>
      <Nohy/>
    </div>
  );
}