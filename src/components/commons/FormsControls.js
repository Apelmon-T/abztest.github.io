import React from "react";
import styles from "./FormsControl.module.css";

export const Input = ({ input, meta, checked, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <input {...input} {...props} checked={checked} />
      <div className={styles.errorText}>
        {props.type !== "radio" && hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};
