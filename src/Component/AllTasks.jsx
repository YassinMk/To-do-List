import Task from "./Task";
import { Box } from "@mui/system";
import useFetch from "../FetchHook/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import api from "../Api/apiCall";
import { useDeleteTask } from "../Context/TasksContext";
import { Alert } from "@mui/material";
import {scrollbarStyle} from "./style.js";



const AllTaks = () => {
  const { deletedTaskId } = useDeleteTask();
  const {
    data: tasks,
    isPending,
    error,
  } = useFetch(api.getAll(), deletedTaskId);
  let filteredTasks = [];

  if (deletedTaskId && tasks) {
    filteredTasks = tasks.filter((task) => task.id !== deletedTaskId);
  } else {
    filteredTasks = tasks;
  }

  return (
    <Box sx={scrollbarStyle}>
      {isPending && (
        <CircularProgress
          sx={{
            height: "25%",
            marginTop: "25%",
            marginLeft: "45%",
            color: "rgb(25, 118, 210)",
          }}
        />
      )}
      {error && (
          <Alert
            sx={{ width: "65%", marginTop: "20%", marginLeft: "5em" }}
            severity="error"
          >
            {error}
          </Alert>
      )}
      {filteredTasks &&
        filteredTasks.map((task) => (
          <Task key={task.id} task={task} completed={task.completed} />
        ))}
    </Box>
  );
};

export default AllTaks;
