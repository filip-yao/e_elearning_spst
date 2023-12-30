import Blanikpico from "@/components/Blanikpico";
import Nohy from "@/components/Nohy";
import obory from "@/datel/obory";
import { Rubik } from "next/font/google";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";


const rubik = Rubik({ subsets: ["latin"] });

export default function Obor() {
  
const router = useRouter();
  const { obor } = router.query;
    const oborObj=obory.find(o =>o.path===obor ) 
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1">
        <Blanikpico nazev={oborObj!.nazev} />
     
      
      </main>
      
       <Nohy/>

      
    </div>
  );
}