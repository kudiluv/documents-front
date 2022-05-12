import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { ProcessCard } from "entities/process-card";
import { $queues, fetchQueuesFx } from "../model";
import styles from "./styles.module.scss";

export const List = () => {
  const queues = useStore($queues);

  useEffect(() => {
    fetchQueuesFx();
  }, []);
  return (
    <div className={styles.content}>
      {queues.map((item) => (
        <div className={styles.cardWrapper} key={item.name}>
          <ProcessCard data={item} />
        </div>
      ))}
    </div>
  );
};
