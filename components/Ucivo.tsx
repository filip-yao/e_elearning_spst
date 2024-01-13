import { Atom } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

type subContent = {
    title: string;
    link: string;
}

export default function Ucivo({title, link, subContent}: {title: string; link: string | null; subContent: subContent[]}) {
        
    return (
        
        
        <div className="mx-8">
            <div>
                <Link href={link?? ""}> 
                    <p className={` m-4 text-2xl text-left ${rubik.className}`}>{title}</p>
                </Link>
                
                <ul className="list-decimal list-inside">
                    {subContent.map(sContent => {

                        return(
                            
                            
                            <li className="mx-12 ">
                                <Link className={`cursor-pointer hover:underline hover:underline-offset-2  ${rubik.className}`} href={sContent.link}> {sContent.title}</Link>         
                            </li>
                            
                        );               
                    })}
                </ul>
            </div>
        </div>
        
    )
}