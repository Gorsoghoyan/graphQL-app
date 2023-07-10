import { SpinnerProps } from "../../types";
import styles from "../../assets/styles/components/spinner.module.scss";
import sassVariables from "../../assets/styles/abstracts/variables.scss";
import classnames from "classnames";

export default function Spinner({
  variant,
  size = 50,
  thickness = 3
}: SpinnerProps) {
  return (
    <div 
      className={classnames(
        styles.loader, 
        styles[variant || ""]
      )}
      style={{
        width: size,
        height: size,
        border: `
          ${thickness}px solid ${sassVariables.appColor1}
        `
      }}
    />
  );
}