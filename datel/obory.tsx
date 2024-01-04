import { Atom, BookOpenText, DesktopTower, Dna, GearFine, Nut } from "@phosphor-icons/react";

const obory = [{
  nazev: "Technické Lyceum",
  obrazek: <Atom size={100} />,
  path:"tl",
  subjects: [{
    nazev: "Biologie",
    obrazek: <Dna size={100} />,
    path:"bio",
  }, {
    nazev: "Český jazyk a literatura",
    obrazek: <BookOpenText size={100} />,
    path:"cjl",
  }]
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