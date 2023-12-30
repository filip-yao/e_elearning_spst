import { Atom } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

export default function Title({text}: {text: string;}) {

    // const jmeno = "filip yao";
    // const predstaveni = `ahoj, jmenuji se ${jmeno}`;
    
    return (
        <p className={` m-4 text-2xl text-center ${rubik.className}`}>{text}</p>
    );
}