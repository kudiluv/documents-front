import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { LoadingButton } from "@mui/lab";
import { useStore } from "effector-react";
import React from "react";
import { $isOpen, agree, deleteFx, disagree } from "../model";

export const RemovingFile = () => {
  const isOpen = useStore($isOpen);
  const pending = useStore(deleteFx.pending);
  return (
    <Dialog open={isOpen} onClose={() => disagree()}>
      <DialogTitle>Do you really want to delete this file?</DialogTitle>
      <DialogActions>
        <Button onClick={() => disagree()} color="primary">
          Disagree
        </Button>
        <LoadingButton
          loading={pending}
          onClick={() => agree()}
          color="primary"
          autoFocus
        >
          Agree
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
