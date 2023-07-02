
// Button types

export type ButtonProps = {
  variant: "primary" | "secondary";
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
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

export type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<
  React.ComponentProps<E>,
  keyof TextOwnProps<E>
>;
