import { ArrowSquareLeft } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const rubik = Rubik({ subsets: ["latin"] });



export default function Blanikpico({nazev}: {nazev: string})  {
  const router = useRouter()  
  return (

          
        <div className={`flex flex-col md:flex-row items-center justify-between ${rubik.className}`}>
          
          
          <div className="flex items-center ">
          <div className="m-4 md:m-8" >
            <Link href="/">
            <p className="text-3xl">STROJEK</p>
            <div className="border-b-2"></div>
            <p className=" text-2xl ">{nazev}</p>
            </Link>
          </div>
          <div  onClick={() => router.back()} className={`bg-white invisible md:visible  cursor-pointer bg-opacity-15 rounded-full p-2 flex items-center ${rubik.className} `}>
            
            <div className="mr-4 ml-2"><ArrowSquareLeft size={25} /></div>
            <div className="mr-4"> 
            <p>Zpět</p>
            </div>


          </div>
          </div>
          
          <div className="mx-4 md:mt-4 p-4 flex flex-wrap justify-evenly gap-8">
            <Link className="underline underline-offset-4" href="/">Domov</Link>
            <Link className="underline underline-offset-4" href="/obory">Obory</Link>
            <Link className="underline underline-offset-4" href="/aboutus">O projektu</Link>
            
          </div>
        </div>
    );
}