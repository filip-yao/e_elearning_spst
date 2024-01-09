import { Atom } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });


export default function PredmetDlazdice({nazev, obrazek,path,pathoboru}: {nazev: string; obrazek: JSX.Element;path: string;pathoboru: string}) {
    return (
        
        
        <Link href={pathoboru + "/" + path} className="w-60 h-52 flex flex-col justify-center gap-4 items-center bg-gray-400 bg-opacity-15  p-3 rounded-2xl border-2 border-gray-500">
                <p className={`text-center  ${rubik.className}`}>{nazev}</p> {obrazek}

        </Link>
        
    )
}