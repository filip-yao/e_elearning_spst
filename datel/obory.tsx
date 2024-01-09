import { Alien, Atom, Bank, BookOpenText, CastleTurret, Coins, DesktopTower, Dna, Flask, Function, GearFine, GlobeHemisphereWest, Nut, Translate } from "@phosphor-icons/react";

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
  },{
    nazev: "Chemie",
    obrazek: <Flask size={100} />,
    path:"che",
  },{
    nazev: "Fyzika",
    obrazek: <Atom size={100} />,
    path:"fyz",
  },{
    nazev: "Německý jazyk",
    obrazek: <Translate size={100} />,
    path:"nej",
  },{
    nazev: "Ruský jazyk",
    obrazek: <Alien size={100} />,
    path:"ruj",
  }, {
    nazev: "Anglický jazyk",
    obrazek: <GlobeHemisphereWest size={100} />,
    path:"anj",
  }, {
    nazev: "Matematika",
    obrazek: <Function size={100} />,
    path:"mat",
  }, {
    nazev: "Občanská nauka",
    obrazek: <Bank size={100} />,
    path:"obn",
  }, {
    nazev: "Dějepis",
    obrazek: <CastleTurret size={100} />,
    path:"dej",
  },{
    nazev: "Informatika",
    obrazek: <DesktopTower size={100} />,
    path:"inf",
  },{
    nazev: "Ekonomika",
    obrazek: <Coins size={100} />,
    path:"eko",
  },]
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