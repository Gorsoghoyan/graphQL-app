import { MdLocationOn } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";
import { NavbarItemType } from "../types";
import { GiCharacter } from "react-icons/gi";
import { ROUTES } from "../utils/constants";

export const navbarItems: NavbarItemType[] = [
  {
    id: 1, 
    title: "Characters", 
    path: ROUTES.CHARACTERS,
    Icon: GiCharacter
  },
  { 
    id: 2, 
    title: "Episodes", 
    path: ROUTES.EPISODES,
    Icon: SiSteelseries
  },
  { 
    id: 3, 
    title: "Locations", 
    path: ROUTES.LOCATIONS,
    Icon: MdLocationOn
  }
];