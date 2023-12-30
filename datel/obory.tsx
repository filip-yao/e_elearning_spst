import { Atom, DesktopTower, GearFine, Nut } from "@phosphor-icons/react";
  


const obory = [{
    nazev: "Technické Lyceum",
    obrazek: <Atom size={100} />,
    path:"tl",
  },{
    nazev: "Informační Technologie",
    obrazek: <DesktopTower size={100} />,
    path:"it",
  },{
    nazev: "Mechanik elektrotechnik",
    obrazek: <Nut size={100} />,
    path:"meu",
  },{
    nazev: "Stojírenství",
    obrazek: <GearFine size={100} /> ,
    path:"str",
  }];
  export default obory;