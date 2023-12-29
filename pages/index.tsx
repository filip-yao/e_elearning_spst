import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  /* definuju funkci před html */
  const gay = () => {
    console.log("If you're gay, then you're gay \n Don't pretend that you're straight \n You can be who you are any day of the week \n You are unlike the others \n So strong and unique");
  }
  const gayhlas = () => {
    new Audio("/gay.mp3").play();
  }

  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-1">
      <div className="flex items-center justify-between">
        <a href='https://www.spst.cz'>
          <img
            src="https://www.spst.cz/themes/spst/logo.svg"
            alt="Posrané logo spst" 
            className=
              'h-12 m-8 grayscale opacity-100 hover:grayscale-0' 
          />
        </a>
        
        <div className='m-8'>
          
        </div>
      </div>
        </main>
      <div className='flex flex-row-reverse m-8'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/New_Gay_Pride_Flag.svg/1280px-New_Gay_Pride_Flag.svg.png"
          className='h-8'
          onClick={gayhlas} 
          onMouseEnter={gay}/>


      </div>
    </div>
   
  );
}