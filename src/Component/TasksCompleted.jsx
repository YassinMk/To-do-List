import Task from "./Task";
import { Box } from "@mui/system";
import useFetch from "../FetchHook/useFetch";
import api from "../Api/apiCall";
import CircularProgress from "@mui/material/CircularProgress";
import { useDeleteTask } from "../Context/TasksContext";
import { Alert } from "@mui/material";
import { scrollbarStyle } from "./style.js";

const TasksCompleted = () => {
  const { data: tasks, isPending, error } = useFetch(api.getComplete());
  const { deletedTaskId } = useDeleteTask();

  let tasksCompleted = [];
  if (deletedTaskId && tasks) {
    tasksCompleted = tasks.filter((task) => task.id !== deletedTaskId);
  } else {
    tasksCompleted = tasks;
  }
  return (
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
      {tasksCompleted &&
        tasksCompleted.map((taskCp) => (
          <Task key={taskCp.id} task={taskCp} completed={taskCp.completed} />
        ))}
    </Box>
  );
};



export default TasksCompleted;
