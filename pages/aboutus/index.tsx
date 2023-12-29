import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
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

      <Nohy/>
    </div>
  );
}