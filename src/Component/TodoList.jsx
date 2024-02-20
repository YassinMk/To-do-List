import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import AllTaks from "./AllTasks";
import Layout from "./Layout";
import IncompleteTask from "./IncompleteTask";
import TasksCompleted from "./TasksCompleted";

const TodoList = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 600,
        height: 650,
        bgcolor: "white",
        width: "100%",
        padding: ".85em",
        fontFamily: " Rubik, sans-serif",
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<AllTaks />} />
            <Route path="/incomplete" element={<IncompleteTask />} />
            <Route path="/complete" element={<TasksCompleted />} />
          </Route>
        </Routes>
        
      </Stack>
    </Card>
  );
};

export default TodoList;
