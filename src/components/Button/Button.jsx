import React from 'react';
import styles from "../Button/Button.module.css"


const Button = ({ onClick, children, type, className, disabled }) => {
  const buttonClassName = disabled ? `${styles.button} ${styles.disabled}` : styles.button;
    
  return (
    <button type={type} onClick={onClick} className={`${buttonClassName} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
