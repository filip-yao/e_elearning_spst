import Blanikpico from "@/components/Blanikpico";
import Dlazdice from "@/components/Dlaznice";
import Nohy from "@/components/Nohy";
import obory from "@/datel/obory";
import { Rubik } from "next/font/google";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Predmet from "./[subject]";
////
const rubik = Rubik({ subsets: ["latin"] });

export default function Obor() {
  
const router = useRouter();
  const { obor } = router.query;
  const oborObj=obory.find(o => o.path === obor); // tady sis nasel ten obor, ve kterem je list tech predmetu
  const predmety = oborObj?.subjects; // na objektu obor si vytahnes promenou subjects a nahrajes to do promenny predmety

  // no tady si musis najit ten predmet na kterym zrovna ses
  // juchuuuuuu

  // jeste si musis najit ten predmet v tom listu ve kterym zrovna jsi
  // ja potrebuju najit vsechnyo presmety na to menu
  
  
//jo nojo mas pravdu ja jsem tunta
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1">
         <Blanikpico nazev={oborObj?.nazev ??"ERROR-HOVNO HOŘÍ"} /> {/* anoooo oborObj se to jmenuje myslim */}
      
      
        <div 
          className="grid grid-cols-1 gap-20 m-20 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        >
         {predmety?.map(predmet => {
            return <Dlazdice nazev={predmet.nazev} obrazek={predmet.obrazek} path={predmet.path}/>;
         })}
        
        
      {/* asi taky bude potrebovat nejak ten list vyrenderovat však je v obory
        no tojo ale ty chces zobrazit ten list predmetu zejo

        no a ted to vykoumej

        dobre, tak nejdriv musis si vzit ten list tech predmetu, ze ktereho to budes brat, ten je tady

        "predmet" je ten jednotlivy predmet v tom listu, je to neco jako for loop
       
        Já to pam pojmenovane jinak ne? co presne, jako ten "predemt"?
        
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