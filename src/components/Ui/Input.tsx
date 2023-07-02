import { InputProps } from "../../types";
import { forwardRef } from "react";
import styles from "../../assets/styles/components/input.module.scss";

const Input = forwardRef<HTMLInputElement, InputProps>((
  props,
  ref
) => {
  return (
    <input 
      ref={ref} {...props} 
      className={styles[props.variant]} 
    />
  );
});

export default Input;