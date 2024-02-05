import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import "./Index.css";
import { Container, Hidden } from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

function App() {
  const [isExpended, setisExpended] = useState(false);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 750,
          bgcolor: "white",
          height: "500px",
          width: "100%",
          borderRadius: "2%",
        }}
      >
        {/* Card Content Here */}
      </Card>
    </Stack>
  );
}
export default App;
