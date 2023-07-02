import { ButtonProps } from "../../types";
import styles from "../../assets/styles/components/button.module.scss";

export default function Button({
  variant,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={styles[variant]} {...rest}>
      {children}
    </button>
  );
}