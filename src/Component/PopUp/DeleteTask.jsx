import React from "react";
import { useSnackbar } from "notistack";
import { Modal as BaseModal } from "@mui/base/Modal";
import { Paper, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/system";
import api from "../../Api/apiCall";
import { useAddTask, useDeleteTask } from "../../Context/TasksContext";
import { Alert } from "@mui/material";

const DeleteTask = ({ open = false, handleClose, taskId }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { deleteTask } = useDeleteTask();

  const handleDelete = async () => {
    const { err } = await api.delete(
      `http://localhost:8000/ListTask/${taskId}`
    );
    if (err !== null) {
      handleClickVariant("error")();
      handleClose();
    } else {
      deleteTask(taskId);
      handleClickVariant("success")();
      handleClose();
    }
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    if (variant === "error") {
      enqueueSnackbar("error during  delete Task!", {
        variant,
        autoHideDuration: 3000,
      });
    } else {
      enqueueSnackbar("Task are deleted with success", {
        variant,
        autoHideDuration: 3000,
      });
    }
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
          <Alert severity="warning">this Action is irreversible</Alert>
          <Stack flexDirection={"row"} gap={2}>
            <Button
              variant="text"
              color="error"
              onClick={() => {
                handleDelete();
              }}
              sx={{ fontFamily: "Rubik, sans-serif" }}
            >
              Confirm
            </Button>
            <Button
              variant="text"
              color="primary"
              onClick={handleClose}
              sx={{ fontFamily: "Rubik, sans-serif" }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default DeleteTask;
