import Task from "./Task";
import { Box } from "@mui/system";
import useFetch from "../FetchHook/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import api from "../Api/apiCall";
import { useAddTask, useDeleteTask} from "../Context/TasksContext";
import { Alert } from "@mui/material";
import {scrollbarStyle} from "./style.js";
import { Collapse } from "@mui/material";




const AllTaks = () => {
  const { deletedTaskId } = useDeleteTask();
  const {task} = useAddTask();

  console.log(task);

  const {
    data: tasks,
    isPending,
    error,
  } = useFetch(api.getAll(), deletedTaskId,task);
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
          <Collapse in={task.id !== deletedTaskId} key={task.id}>
          <Task key={task.id} task={task}  />
          </Collapse>
        ))}
    </Box>
  );
};

export default AllTaks;
