import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import Ucivo from "@/components/Ucivo";
import obory from "@/datel/obory";
import { Rubik } from "next/font/google";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import ucivotext from "@/datel/ucivotext";

const rubik = Rubik({ subsets: ["latin"] });

export default function Predmet() {
  const router = useRouter();
  const { obor, subject } = router.query; // tady je ta routa v subject

  const oborObj = obory.find(o => o.path === obor); // takhle se vyhledava
  const predmety = oborObj?.subjects; // tady mas predmety
  const predmetObj = predmety?.find(p => p.path === subject);  // noo tak nejak takhle no
  const ucivo = ucivotext.find(s => s.predmet === subject);
  
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1">
        <Blanikpico nazev={predmetObj?.nazev ??"ERROR-HOVNO HOŘÍ"} />
         
        {ucivo?.content.map(content => {
          return <Ucivo title={content.title} link={content.link} subContent={content.subContent} />;
        } )}  
      </main>
      
       <Nohy/>

      
    </div>
  );
}