
import verze from "@/verze";
import { GithubLogo, GraduationCap } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import { useRouter } from "next/router";

const rubik = Rubik({ subsets: ["latin"] });

export default function Nohy(){


    /* definuju funkci před html */
  const gay = () => {
    console.log(
      "If you're gay, then you're gay \n Don't pretend that you're straight \n You can be who you are any day of the week \n You are unlike the others \n So strong and unique"
    );
    
  };

  const router = useRouter();
 
  return (
      <div className="flex flex-wrap-reverse items-center justify-center md:justify-between m-8 bg-white bg-opacity-0 rounded-2xl  ">
          <div className={`flex items-center gap-3 m-2 bg-black p-4 rounded-xl text-sm border-2 flex-wrap border-gray-400  ${rubik.className}`}>
              <p className="text-center text-[10px] italic">{verze}</p>
              <p>© 2023 STROJEK  BY</p>
              <a className={`italic font-semibold text-black bg-gray-400 p-2 rounded-full text-sm  ${rubik.className}`} href="https://www.instagram.com/philip.yao.cn/" target="_blank"> 
                  FILIP YAO
              </a>
          </div> 
      <div className="flex gap-4 m-2 ">
          <a 
              href="https://github.com/filip-yao/e_elearning_spst" target="blank"> 
              <GithubLogo size={45} className="h-12 w-12 cursor-pointer fill-white bg-black p-2 rounded-full border-2 border-gray-400"/>
          </a>
          <a 
              href="https://www.spst.cz" target="blank"> 
              <GraduationCap size={45} className="h-12 w-12 cursor-pointer fill-white bg-black p-2 rounded-full border-2 border-gray-400" />
              
          </a>
          
          <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/White_paw_print.svg/2129px-White_paw_print.svg.png"
              className="h-12 cursor-pointer fill-white bg-black p-3 rounded-full border-2 border-gray-400 " 
              onMouseEnter={gay}
              alt="Tapka"
              onClick={() => router.push("https://mestskapolicie.trebic.cz/utulek-pro-opustena-zvirata-trebic/")}
          />
              


      </div>
    </div>
  );
}