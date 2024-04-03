import Task from "./Task";
import { Box } from "@mui/system";
import useFetch from "../FetchHook/useFetch";
import api from "../Api/apiCall";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { useDeleteTask } from "../Context/TasksContext";


const TasksCompleted = () => {
  const { data: tasks, isPending, error } = useFetch(api.getComplete());
  const { deletedTaskId } = useDeleteTask();

  let tasksCompleted = [];
  if (deletedTaskId && tasks) {
    tasksCompleted = tasks.filter((task) => task.id !== deletedTaskId);
  }else{
    tasksCompleted=tasks;
  }
    return ( 
        <Box
        sx={scrollbarStyle}
      >
        {
          isPending && <CircularProgress sx={{ height: "25%" }} />
        }
        {
          error && (
            <Typography
              align="center"
              variant="h5"
              sx={{ fontFamily: "'Rubik', sans-serif", marginTop: "25%" }}
            >
              {error}
            </Typography>
          )
        }
        {
          tasksCompleted && tasksCompleted.map((taskCp) => <Task key={taskCp.id} task={taskCp} completed={taskCp.completed} />)
        }
        </Box>
        
     );
}




const scrollbarStyle={
  
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
}
 
export default TasksCompleted;