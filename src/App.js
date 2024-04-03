import Stack from "@mui/material/Stack";
import "./Index.css";
import TodoList from "./Component/TodoList";
import { TaskProvider } from "./Context/TasksContext.js";





function App() {

  return (
    <TaskProvider>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "97vh" }}
      >
        <TodoList />
      </Stack>
    </TaskProvider>
    
  );
}
export default App;
