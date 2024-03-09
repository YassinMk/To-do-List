import React, { forwardRef } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button } from "@mui/material";
import CreateTaskFormule from "./CreateTaskFormule";

const textFieldStyles = {
  width: "87%",
  "& .MuiInputLabel-root": {
    // Target the InputLabel component
    fontFamily: "Rubik, sans-serif", 
  },
  "& .MuiInputBase-root": {
    // Target the Input component
    fontFamily: "Rubik, sans-serif", 
  },
};

const CreateTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginLeft={2.1}
        >
          <TextField
            id="outlined-basic"
            label="Add task"
            variant="outlined"
            sx={textFieldStyles}
            required
            fullWidth
          />
          <Button
            onClick={handleOpen}
            disableRipple
            sx={{
              marginRight: ".2em",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none"
              }
            }}
          >
            <AddCircleOutlinedIcon
              sx={{
                cursor: "pointer",
                fontSize: "3em",
                color: "rgb(0, 145, 247)",

                transition: "transform 0.3s ease-in-out", // Add a transition to the transform property
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
          </Button>
        </Stack>
        <CreateTaskFormule open={open} handleClose={handleClose}  />
      </Box>
       
     
    </>
  );
};






export default CreateTask;
