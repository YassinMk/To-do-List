import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import styled from "@mui/material/styles/styled";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import DeleteTask from "./PopUp/DeleteTask";
import api from "../Api/apiCall";
import ModifiedTaskFormule from "./PopUp/ModifiedTaskFormule";



const Task = ({ task }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id, title, description, completed } = task;
  const [iscompleted, setIsCompleted] = useState(completed);
  const [isComponentModified, setIsComponentModified] = useState(false);

  const handleComplete = async () => {
    const { err } = await api.toggleTaskCompletion(id, completed);
    if (err === null) {
      setIsCompleted(!completed);
    }
  };
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
            <Typography variant="h6">{title}</Typography>
            <Typography variant="p" sx={{ fontWeight: "300" }}>
              {description}
            </Typography>
          </Box>

          <Box>
            <Stack spacing={1} direction="row">
              <FabModified
                aria-label="edit"
                disableRipple
                sx={{
                  borderColor: "rgb(37, 47, 136)",
                  "&:hover": {
                    backgroundColor: "rgb(37, 47, 136)",
                    borderColor: "white",
                  },
                }}
                onClick={()=>{setIsComponentModified(true)}}
              >
                <ModeEditOutlineOutlinedIcon
                  sx={{
                    cursor: "pointer",
                    color: "rgb(37, 47, 136)",
                    "&:hover": { color: "white" },
                  }}
                />
              </FabModified>

              <FabModified
                aria-label="delete"
                disableRipple
                sx={{
                  borderColor: "red",
                  "&:hover": {
                    backgroundColor: "red",
                    borderColor: "white",
                  },
                }}
                onClick={() => {
                  handleOpen();
                }}
              >
                <ClearOutlinedIcon
                  sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
                  color="error"
                />
              </FabModified>

              <FabModified
                aria-label="complete"
                disableRipple
                sx={{
                  borderColor: iscompleted ? "white" : "green",
                  backgroundColor: iscompleted ? "green" : "",
                  "&:hover": {
                    backgroundColor: "green",
                    borderColor: "white",
                  },
                }}
                onClick={handleComplete}
              >
                <CheckIcon
                  sx={{
                    cursor: "pointer",
                    color: iscompleted ? "white" : "rgb(16, 152, 104)",
                    ...(iscompleted
                      ? {}
                      : {
                          "&:hover": {
                            color: "white",
                          },
                        }),
                  }}
                />
              </FabModified>
            </Stack>
          </Box>
        </Stack>
        <DeleteTask open={open} handleClose={handleClose} taskId={task.id} />
        <ModifiedTaskFormule open={isComponentModified} handleClose={()=>{setIsComponentModified(false)}} task={task} />          
      </Paper>
    </>
  );
};

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

export default Task;
