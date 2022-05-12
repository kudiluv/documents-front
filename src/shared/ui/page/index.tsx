import React from "react";
import styles from "./styles.module.scss";

type PropsType = {
  children: React.ReactNode;
};

export const Page = (props: PropsType) => {
  return <div className={styles.page}>{props.children}</div>;
};
