import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { $queueInfo, fetchDetailInfoFx } from "../model";
import styles from "./styles.module.scss";

type PropsType = {
  name: string;
};

const Table = ({ name }: PropsType) => {
  // const pending = useStore(fetchDetailInfoFx.pending);
  const queueInfo = useStore($queueInfo);

  useEffect(() => {
    fetchDetailInfoFx({
      name,
    });
  }, [queueInfo.$page, name]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "orginalName", headerName: "Name", width: 150 },
    { field: "status", headerName: "Status" },
  ];

  console.log(queueInfo.$tasks);

  return (
    <div className={styles.container}>
      <DataGrid columns={columns} rows={queueInfo.$tasks} pageSize={10} />
    </div>
  );
};

export default Table;
