import React, { forwardRef } from "react";
import { styled } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import PropTypes from "prop-types";
import clsx from "clsx";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import { textFieldStyles } from "../style.js";
import { useAddTask } from "../../Context/TasksContext";
import api from "../../Api/apiCall";

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateTaskFormule = ({ open = false, handleClose, newtask , setNewTask }) => {
  const {addTask} = useAddTask();
  const { enqueueSnackbar } = useSnackbar();

  const handleCreateTask = async (e,newtask) => {
    e.preventDefault();
    const {err} = await api.addTask(newtask);

    if(err !== null){
      handleClickVariant("error")();
      handleClose();
    }else{
      addTask(newtask);
      handleClickVariant("success")();
      handleClose();
    }
  }

 

 
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    if (variant === "error") {
      enqueueSnackbar("error creating Task!", {
        variant,
        autoHideDuration: 3000,
      });
    } else {
      enqueueSnackbar("Task are creating with success ", {
        variant,
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        sx={{
          width: 500,
          borderRadius: "10px",
          padding: "1.5em",
        }}
      >
        <Stack spacing={3}>
          <Typography
            textAlign={"center"}
            variant="h5"
            fontFamily={"Rubik, sans-serif"}
          >
            Add Task
          </Typography>
          <TextField
            id="standard-basic"
            label="Title of task"
            variant="standard"
            fontFamily={"Rubik, sans-serif"}
            value={newtask.title}
            onChange={(e) => setNewTask({...newtask,title:e.target.value})}
          />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            sx={{
              ...textFieldStyles,
              "& .MuiInputBase-root": {
                // Target the Input component
                fontFamily: "Rubik, sans-serif", // Set the font family
              },
              "& label.Mui-focused": {
                color: "rgb(25, 118, 210,0.8)", // Change the color of the label when the TextField is focused
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "rgb(25, 118, 210,0.8)", // Change the underline color when the TextField is focused
              },
            }}
            value={newtask.description}
            onChange={(e) => setNewTask({...newtask,description:e.target.value})}
          />
          <Stack flexDirection={"row"} gap={2}>
            <Button
              variant="text"
              color="primary"
              sx={{ fontFamily: "Rubik, sans-serif" }}
              onClick={(e) => {
                handleCreateTask(e,newtask);
              }}
            >
              Confirm
            </Button>
            <Button
              variant="text"
              color="error"
              sx={{ fontFamily: "Rubik, sans-serif" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
};

const Backdrop = forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default CreateTaskFormule;
