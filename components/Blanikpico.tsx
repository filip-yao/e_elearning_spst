import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });


export default function Blanikpico({nazev}: {nazev: string}) {
    return (
        <div className={`flex items-center justify-between ${rubik.className}`}>
          
          

          <div className="m-8">
            <p className="text-3xl">STROJEK</p>
            <div className="border-b-2"></div>
            <p className=" text-2xl ">{nazev}</p>
          </div>
          
          <div className="m-4 p-4 flex flex-wrap justify-evenly gap-8">
            <Link className="underline underline-offset-4" href="/">Domov</Link>
            <Link className="underline underline-offset-4" href="/obory">Obory</Link>
            <Link className="underline underline-offset-4" href="/aboutus">O projektu</Link>
            
          </div>
        </div>
    );
}