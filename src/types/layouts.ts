import { IconType } from "react-icons";
import { ChildrenProp } from "./general";

// Sidebar types
export type SidebarProps = ChildrenProp;

// Header types
export type NavbarProps = {
  isNavExpanded: boolean;
  handleMenuClose: () => void;
};

export type OnClick = {
  onClick: () => void;
};

export type MenuItemProps = {
  path: string;
  title: string;
  Icon: IconType;
} & OnClick;