import { RiTodoLine } from "react-icons/ri";
import { GiCharacter } from "react-icons/gi";
import { ROUTES } from "../utils/constants";

export const navbarItems = [
  {
    id: 1, 
    title: "Characters", 
    path: ROUTES.CHARACTERS,
    Icon: GiCharacter
  },
  { 
    id: 2, 
    title: "Todos", 
    path: ROUTES.TODOS,
    Icon: RiTodoLine
  }
];