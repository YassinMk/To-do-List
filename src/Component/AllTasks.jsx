import Task from "./Task";
import { Box } from "@mui/system";
import { Scrollbar } from "react-scrollbars-custom";

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

const AllTaks = () => {
  return (
    <Box
      sx={scrollbarStyle}
    >
      <Task />
      <Task />
      <Task />
      <Task />
    </Box>
  );
};

export default AllTaks;
