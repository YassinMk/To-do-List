import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import styled from "@mui/material/styles/styled";
import Stack from "@mui/material/Stack";
import CreateTaskFormule from "./CreateTaskFormule";
import { useState } from "react";

const FabModified = styled(Fab)({
  float: "Right",
  width: "47px",
  height: "47px",
  border: "3px solid rgb(25, 118, 210)",
  background: "white",
  transition: "transform 0.3s ease-in-out",
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "#eeeeee",
  },
  "&:hover": {
    transform: "scale(1.2)",
  },
});

const Task = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [deleteTask, setDeleteTask] = useState(false);

  return (
    <>
      <Paper
        variant="elevation"
        elevation={4}
        sx={{
          marginTop: 2,
          padding: 2,
          width: "90%",
          bgcolor: "rgb(25, 118, 210)",
          color: "white",

          transition: "transform 0.2s", // Smooth transition
          ":hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flex={1}
        >
          <Box>
            <Typography variant="h6">fdsfdfds</Typography>
            <Typography variant="p" sx={{ fontWeight: "300" }}>
              ffdsfsdjklfdsj
            </Typography>
          </Box>

          <Box>
            <Stack spacing={1} direction="row">
              <FabModified
                aria-label="edit"
                disableRipple
                sx={{ borderColor: "rgb(37, 47, 136)" }}
              >
                <ModeEditOutlineOutlinedIcon
                  sx={{ cursor: "pointer", color: "rgb(37, 47, 136)" }}
                />
              </FabModified>

              <FabModified
                aria-label="edit"
                disableRipple
                sx={{ borderColor: "red" }}
                onClick={() => {
                  handleOpen();
                  setDeleteTask(true);
                }}
              >
                <ClearOutlinedIcon sx={{ cursor: "pointer" }} color="error" />
              </FabModified>

              <FabModified
                aria-label="edit"
                disableRipple
                sx={{ borderColor: "green" }}
              >
                <CheckIcon
                  sx={{ cursor: "pointer", color: "rgb(16, 152, 104)" }}
                />
              </FabModified>
            </Stack>
          </Box>
        </Stack>
        <CreateTaskFormule
          open={open}
          handleClose={handleClose}
          deleteTask={deleteTask}
        />
      </Paper>
    </>
  );
};

export default Task;
