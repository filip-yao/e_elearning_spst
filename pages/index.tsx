import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import { ArrowCircleDown } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import Head from "next/head";


const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  

  return (
    

    <div className="flex flex-col min-h-screen w-full justify-between">
     <Head> <title> Hlavní stránka</title> </Head>
       <div><Blanikpico nazev="VÍTEJTE V ELEARNINGU" /></div>
      
      <div className={`font-medium text-2xl mb-60 mt-10 ${rubik.className}`}>
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
        <div className="flex justify-center">
          
        <a href="#zapojeni"><ArrowCircleDown size={44} weight="fill"/></a>
        </div>
      
      
      </div>

        
        <div id="zapojeni" className="flex-col items-center justify-center mb-56 ">
          <h1 className="text-center font-bold text-xl">Přispějte do našeho projektu!</h1>
          <p className="m-8 text-center">
            Chcete-li přispět k našemu projektu a podělit se o své články nebo učební materiály, můžete nám je zaslat
            na následující e-mailovou adresu:
          </p>
           <p className="text-center">
            <strong>Email:</strong> <a href="mailto:philip@kosmoproduction.eu">philip@kosmoproduction.eu</a>
          </p>

          <p className="text-center">
            Rádi přivítáme vaše příspěvky a budeme se těšit na spolupráci s vámi!
          </p>


        </div> 
        
     
      
      <div><Nohy/></div>
      
       
      
    </div>
  );
}