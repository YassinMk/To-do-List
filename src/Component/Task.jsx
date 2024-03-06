import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import styled from "@mui/material/styles/styled";
import Stack from "@mui/material/Stack";

const FabModified = styled(Fab)({
    float: "Right",
    width: "47px",
    height: "47px",
    border: "3px solid rgb(25, 118, 210)",
    background: "white",
    transition:"transform 0.3s ease-in-out",
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "#eeeeee",
  },"&:hover": {
    transform: "scale(1.2)",
  }
});


const Task = () => {
  return (
    <>
      <Paper
        variant="elevation"
        elevation={4}
        sx={{
          marginTop: 2,
          padding: 2,
          width: "90%",
          bgcolor: "rgb(25, 118, 210)",
          color: "white",
          transition: "transform 0.2s", // Smooth transition
          ":hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h6">fdsfdfds</Typography>
            <Typography variant="p" sx={{ fontWeight: "300" }}>
              ffdsfsdjklfdsj
            </Typography>
          </Box>

          <Box>
            <Stack spacing={1} direction="row">
              <FabModified
                aria-label="edit"
                disableRipple
                
              >
                <ModeEditOutlineOutlinedIcon
                  color="primary"
                  sx={{ cursor: "pointer" }}
                />
              </FabModified>

              <FabModified
                color="white"
                aria-label="edit"
                disableRipple
                sx={{borderColor:"red"}}
                
              >
                <ClearOutlinedIcon sx={{ cursor: "pointer", color: "red" }} />
              </FabModified>
              <FabModified
                color="white"
                aria-label="edit"
                disableRipple
                sx={{borderColor:"green"}}
              >
                <CheckIcon
                  sx={{ cursor: "pointer", color: "rgb(16, 152, 104)" }}

                />
              </FabModified>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default Task;
