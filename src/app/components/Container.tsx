import React, { ReactNode } from "react";
import styles from "../styles/Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Container;
