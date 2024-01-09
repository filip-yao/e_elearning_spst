import Blanikpico from "@/components/Blanikpico";
import Dlazdice from "@/components/Dlaznice";
import Nohy from "@/components/Nohy";
import obory from "@/datel/obory";
import { Rubik } from "next/font/google";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Predmet from "./[subject]";
import PredmetDlazdice from "@/components/PredmetDlazdice";
////
const rubik = Rubik({ subsets: ["latin"] });

export default function Obor() {
  
const router = useRouter();
const { obor } = router.query;
const oborObj=obory.find(o => o.path === obor); 
const predmety = oborObj?.subjects; 


  
  
//jo nojo mas pravdu ja jsem tunta
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1">
         <Blanikpico nazev={oborObj?.nazev ??"ERROR-HOVNO HOŘÍ"} /> 
      
      
        <div 
          className="grid grid-cols-1 gap-20 m-20 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        >
         {predmety?.map(predmet => {
            return <PredmetDlazdice nazev={predmet.nazev} obrazek={predmet.obrazek} path={predmet.path} pathoboru={obor as string}/>;
         })}
        
        
      {/* 
        
        
        ANOOO SPRAVNEEEEE
        MILUJU TEEEE jsi muj sikula :D jupiii
          Ja tebe takzyyyyyyyyyyyyyyyy jooooo  💜💜💜💜💜💜💜💜
      */}
        </div>
    
      </main>
      
       <Nohy/>

      
    </div>
  );
}