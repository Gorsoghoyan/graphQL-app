import { TextProps } from "../../types";
import styles from "../../assets/styles/components/text.module.scss";
import classnames from "classnames";

export default function Text<E extends React.ElementType>({
  as,
  size,
  color,
  children
}: TextProps<E>) {
  const Component = as || "div";

  return (
    <Component className={classnames(
      styles[size || ""],
      styles[color || ""]
    )}>
      {children}
    </Component>
  );
}