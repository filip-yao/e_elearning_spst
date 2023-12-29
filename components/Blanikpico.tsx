import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });


export default function Blanikpico({nazev}: {nazev: string}) {
    return (
        <div className={`flex items-center justify-between ${rubik.className}`}>
          <a href="https://www.spst.cz/" target="blank">
            <img
              src="https://www.spst.cz/themes/spst/logo.svg"
              alt="Posrané logo spst"
              className="h-12 m-8 grayscale opacity-100 hover:grayscale-0"
            />
          </a>

          <div>
            <p className="text-center text-3xl">STROJEK</p>
            <div className="border-b-2"></div>
            <p className="text-center text-2xl ">{nazev}</p>
          </div>
          
          <div className="m-4 p-4 flex justify-evenly gap-8">
            <Link href="/">Domov</Link>
            <Link href="/obory">Obory</Link>
            <Link href="/obory">Obory</Link>
            
          </div>
        </div>
    );
}