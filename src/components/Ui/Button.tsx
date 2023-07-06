import { ButtonProps } from "../../types";
import styles from "../../assets/styles/components/button.module.scss";
import classnames from "classnames";

export default function Button({
  variant,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button 
      {...rest}
      className={classnames(
        styles.defaultStyles,
        styles[variant]
      )} 
    >
      {children}
    </button>
  );
}