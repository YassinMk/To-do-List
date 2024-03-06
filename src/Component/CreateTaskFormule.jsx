import React, { forwardRef } from "react";
import { styled } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import PropTypes from "prop-types";
import clsx from "clsx";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const CreateTaskFormule = ({ open = false, handleClose }) => {
  return (
    <Modal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <Paper sx={{ width: 500, padding: "1.5em" }} p={2}>
        <Stack spacing={3}>
          <Typography textAlign={"center"} variant="h5">Add Task</Typography>
          <TextField
            id="standard-basic"
            label="Title of task"
            variant="standard"
            sx={textFieldStyles}
            
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
              '& label.Mui-focused': {
                color: 'rgb(25, 118, 210,0.8)', // Change the color of the label when the TextField is focused
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'rgb(25, 118, 210,0.8)', // Change the underline color when the TextField is focused
              }
            }}
            
          />
          <Stack flexDirection={"row"} gap={2}>
            <Button variant="text"sx={{fontFamily:"Rubik, sans-serif"}} >Confirm</Button>
            <Button variant="text"sx={{fontFamily:"Rubik, sans-serif", }}  color="error" onClick={handleClose}>Cancel</Button>
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

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;


const textFieldStyles = {
  color:"rgb(37, 47, 136)",
  "& .MuiInputLabel-root": {
    // Target the InputLabel component
    fontFamily: "Rubik, sans-serif", // Set the font family
  }
};

export default CreateTaskFormule;
