import Stack from "@mui/material/Stack";
import "./Index.css";
import TodoList from "./Component/TodoList";
import CreateTask from "./Component/CreateTask";

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "97vh" }}
    >
      <TodoList />
      <CreateTask />
    </Stack>
  );
}
export default App;
