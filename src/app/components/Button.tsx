import React from "react";
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className: keyof typeof styles;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button className={`${styles[className]}`} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
