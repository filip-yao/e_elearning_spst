import Blanikpico from "@/components/Blanikpico";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
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
        <Blanikpico/>
      </main>

      <div className="flex flex-row-reverse m-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/White_paw_print.svg/2129px-White_paw_print.svg.png"
          className="h-8 cursor-pointer fill-white " 
          onClick={gayhlas}
          onMouseEnter={gay}
        />
      </div>
    </div>
  );
}