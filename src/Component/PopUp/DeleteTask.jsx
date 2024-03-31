import React from "react";
import { useSnackbar } from "notistack";
import { Modal as BaseModal } from "@mui/base/Modal";
import { Paper, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/system";
const DeleteTask = ({ open = false, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("Task is deleted with success", {
      variant,
      autoHideDuration: 2000,
    });
  };

  const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={{ width: 500, padding: "1.5em" }}>
        <Stack spacing={3}>
          <Typography variant="h6" fontFamily={"Rubik, sans-serif"}>
            Are you sure to remove this task?
          </Typography>
          <Typography
            variant="p"
            fontFamily={"Rubik, sans-serif"}
            marginTop={0}
          >
            This action is irreversible !
          </Typography>
          <Stack flexDirection={"row"} gap={2}>
            <Button
              variant="text"
              color="error"
              onClick={handleClickVariant("success")}
              sx={{ fontFamily: "Rubik, sans-serif" }}
            >
              Confirm
            </Button>
            <Button variant="text" color="primary" onClick={handleClose} sx={{ fontFamily: "Rubik, sans-serif" }}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default DeleteTask;
