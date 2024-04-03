import { Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import Task from "./Task";
import useFetch from "../FetchHook/useFetch";
import api from "../Api/apiCall";
import CircularProgress from "@mui/material/CircularProgress";
import { useDeleteTask } from "../Context/TasksContext";

const scrollbarStyle = {
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "2em",
  overflowY: "auto",
  height: "350px",
  marginTop: ".5em",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#7a9efa",
    borderRadius: "5px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#7b9efb",
  },
};

const IncompleteTask = () => {
  const { data: tasks, isPending, error } = useFetch(api.getNotComplete());
  const { deletedTaskId } = useDeleteTask();
  let incompleteTasks = [];

  if (deletedTaskId && tasks) {
    incompleteTasks = tasks.filter((task) => task.id !== deletedTaskId);
  }else{
    incompleteTasks=tasks;
  }
  return (
    <>
      {incompleteTasks && incompleteTasks.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            marginTop: "25%",
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            fontFamily={"Rubik, sans-serif"}
            fontWeight={200}
          >
            You complete all the tasks! Good Job 👍
          </Typography>
        </Box>
      ) : (
        <Box sx={scrollbarStyle}>
          {isPending && <CircularProgress sx={{ height: "25%" }} />}
          {error && (
            <Typography
              align="center"
              variant="h5"
              sx={{ fontFamily: "'Rubik', sans-serif", marginTop: "25%" }}
            >
              {error}
            </Typography>
          )}
          {incompleteTasks &&
            incompleteTasks.map((task) => <Task key={task.id} task={task} completed={task.completed} />)}
        </Box>
      )}
    </>
  );
};

export default IncompleteTask;
