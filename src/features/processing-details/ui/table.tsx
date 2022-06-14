import { IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import { $queueInfo, fetchDetailInfoFx } from "../model";
import styles from "./styles.module.scss";

type PropsType = {
  name: string;
};

const Table = ({ name }: PropsType) => {
  const queueInfo = useStore($queueInfo);

  const fetchData = () => {
    fetchDetailInfoFx({
      name,
    });
  };

  useEffect(() => {
    fetchData();
  }, [queueInfo.$page, name]);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "orginalName",
      headerName: "Name",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "refetch",
      filterable: false,
      disableColumnMenu: true,
      sortable: false,
      flex: 1,
      headerAlign: "right",
      renderHeader: () => (
        <IconButton onClick={fetchData}>
          <ReplayIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <DataGrid columns={columns} rows={queueInfo.$tasks} pageSize={10} />
    </div>
  );
};

export default Table;
