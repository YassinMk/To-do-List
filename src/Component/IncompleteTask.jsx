import { Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import Task from "./Task";
import useFetch from "../FetchHook/useFetch";
import api from "../Api/apiCall";
import CircularProgress from "@mui/material/CircularProgress";
import { useDeleteTask } from "../Context/TasksContext";
import { Alert } from "@mui/material";
import {scrollbarStyle} from "./style.js";


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
             <Alert
             sx={{ width: "65%", marginTop: "20%", marginLeft: "5em" }}
             severity="error"
           >
             {error}
           </Alert>
          )}
          {incompleteTasks &&
            incompleteTasks.map((task) => <Task key={task.id} task={task} completed={task.completed} />)}
        </Box>
      )}
    </>
  );
};

export default IncompleteTask;
