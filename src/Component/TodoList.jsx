import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import AllTaks from "./AllTasks";
import Layout from "./Layout";
import IncompleteTask from "./IncompleteTask";
import TasksCompleted from "./TasksCompleted";
import CreateTask from "./CreateTask";
import { CardStyles } from "./style";

const TodoList = () => {
  return (
    <Card variant="outlined" sx={CardStyles}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<AllTaks />} />
            <Route path="/incomplete" element={<IncompleteTask />} />
            <Route path="/complete" element={<TasksCompleted />} />
          </Route>
        </Routes>
      </Stack>
      <CreateTask />
    </Card>
  );
};

export default TodoList;
