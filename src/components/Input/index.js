import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

const Input = ({ value, onChange, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      {...rest}
      className={styles.input}
    />
  );
};

export default forwardRef(Input);
