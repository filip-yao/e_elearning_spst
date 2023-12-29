import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });


export default function Blanikpico() {
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
            <p className="text-center text-xl italic">Alpha-0.0.1</p>
          </div>
          
          <div className="m-4 p-4 flex justify-evenly gap-8">
            <div>
              Menu
            </div>
            <div>
              Menu
            </div>
            <div>
              Menu
            </div>
          </div>
        </div>
    );
}