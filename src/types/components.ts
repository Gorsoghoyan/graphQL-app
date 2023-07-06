
// Button types
export type ButtonProps = {
  variant: "menuBurger";
  children: React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

// Input types
type InputType = {
  variant: "primary" | "secondary";
};

export type InputProps = React.ComponentProps<"input"> & InputType;

// Text types
type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "appColor2";
  children: React.ReactNode;
  as?: E;
};

export type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<
  React.ComponentProps<E>,
  keyof TextOwnProps<E>
>;

// ListView types
export type ListViewProps<T> = {
  variant: "navbar"
  items: T[];
  render: (item: T) => React.ReactNode;
};  

export type AbstractItemType = {
  id: number | string;
};

// Header types
export type MenuBurgerProps = {
  handleMenuToggle: () => void;
};

export type NavbarProps = {
  isNavExpanded: boolean;
} & MenuBurgerProps;

// ImageDiv types 
export type ImageDivProps = {
  imgURL: string;
  width?: number | string;
  height?: number | string;
};        