import Task from "./Task";
import { Box } from "@mui/system";
import useFetch from "../FetchHook/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import api from "../Api/apiCall";

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

const AllTaks = () => {
  const { data: tasks, isPending, error } = useFetch(api.getAll());
  console.log(tasks);
  return (
    <Box sx={scrollbarStyle}>
      {isPending && <CircularProgress sx={{height:"25%"}} />}
      {error && (
        <Typography
          align="center"
          variant="h5"
          sx={{ fontFamily: "'Rubik', sans-serif", marginTop: "25%" }}
        >
          {error}
        </Typography>
      )}
      {tasks && tasks.map((task) => <Task key={task.id} task={task} completed={task.completed} />)}
    </Box>
  );
};

export default AllTaks;
