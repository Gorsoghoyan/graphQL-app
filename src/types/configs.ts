import { IconType } from "react-icons/lib";
import { FiltersType, OptionsType } from "./general";

export type NavbarItemType = {
  id: number;
  title: string;
  path: string;
  Icon: IconType;
};

export type CharacterDetailsType = {
  id: number;
  title: string;
  key: string;
};

export type SelectsConfigType = {
  id: number;
  placeholder: string;
  options: Array<OptionsType>;
  filter: FiltersType;
};