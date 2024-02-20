import Stack from "@mui/material/Stack";
import "./Index.css";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <TodoList />
    </Stack>
  );
}
export default App;
