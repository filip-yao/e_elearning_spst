import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import { Rubik } from "next/font/google";


const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  

  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
      
       <div><Blanikpico nazev="VÍTEJTE V ELEARNINGU" /></div>
      
      <div className="font-medium text-2xl font-[Rubik] " >
        <p className="text-center m-2">MODERNÍ E-LEARNING</p>
        <p className="text-center ">pro střední školy a gymnázia</p>
        <p className="text-center italic m-8">Od studentů studentům!</p>
        <div className="flex justify-center"><div className="border-b-4 w-44"></div></div>
       
       <div className="p-12 text-base">
       
        <p className="text-center italic">"...Vivat academia,</p>
        <p className="text-center italic">Vivant professores,</p>
        <p className="text-center italic">Vivat membrum quod libet,</p> 
        <p className="text-center italic">Vivant membra quae libet;</p> 
        <p className="text-center italic">Semper sint in flore..."</p> 
        </div>
        
      
      
      </div>

         
        
     
      
      <div><Nohy/></div>
      
       
      
    </div>
  );
}