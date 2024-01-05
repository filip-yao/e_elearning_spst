import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import obory from "@/datel/obory";
import { Rubik } from "next/font/google";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";


const rubik = Rubik({ subsets: ["latin"] });

export default function Predmet() {
  
const router = useRouter();
  const { subject, obor } = router.query; // tady je ta routa v subject

  const oborObj = obory.find(o => o.path === obor); // takhle se vyhledava
  const predmety = oborObj?.subjects; // tady mas predmety

  const predmetObj = predmety?.find(p => p.path === subject);  // noo tak nejak takhle no

  // Já něviiim, dobre ja pomuzu
  // no tak tady si musis najit ten predmet na kterym jsi
  // musis si v predmetech najit ten predmet
  
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1">
        <Blanikpico nazev={predmetObj?.nazev ??"ERROR-HOVNO HOŘÍ"} />
        
      
      </main>
      
       <Nohy/>

      
    </div>
  );
}