import Blanikpico from "@/components/Blanikpico";
import Dlazdice from "@/components/Dlaznice";
import Nohy from "@/components/Nohy";
import obory from "@/datel/obory";
import { Atom, DesktopTower, GearFine, Nut } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Obory() {
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
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        <Blanikpico nazev="OBORY" />
        
        
        <div className="grid grid-cols-1 gap-20 m-20 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {obory.map(obor => {
            return <Dlazdice nazev={obor.nazev} obrazek={obor.obrazek} path={obor.path}/>;
          })}
        </div>
      </main>
      
      <Nohy/>
    </div>
  );
}