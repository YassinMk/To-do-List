import { Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";

const IncompleteTask = () => {
  const [incompleteTask, setIncompleteTask] = useState([]);
  return (
    <>
      {incompleteTask.length === 0 ? (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height:"50vh",
         
        }}
      >
        <Typography variant="h6" component="h1" fontFamily={"Rubik, sans-serif"} fontWeight={200}>
          You have no incomplete tasks! Good Job 👍
        </Typography>
      </Box>
      ) : (
        <p>fdsfdfds</p>
      )}
    </>
  );
};

export default IncompleteTask;
