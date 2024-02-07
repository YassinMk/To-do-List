import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import "./Index.css";
import { Container, Hidden } from "@mui/material";
import { useState } from "react";
import TaskCard from "./Component/TaskCard";

function App() {
  const [isExpended, setisExpended] = useState(false);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <TaskCard />
    </Stack>
  );
}
export default App;
