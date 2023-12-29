import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Blanikpico nazev="VÍTEJTE V ELEARNINGU" />
     
      
      </main>
      
       <Nohy/>

      
    </div>
  );
}