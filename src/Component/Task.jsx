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
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#eeeeee",
    },
});

const Task = () => {
    return ( 
        <>
        <Paper
          variant="contained"
          elevation={8}
          sx={{
            marginTop: 2,
            padding: 2,
            width: "90%",
            bgcolor: "rgb(25, 118, 210)",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
                  sx={{
                    float: "Right",
                    width: "47px",
                    height: "47px",
                    border: "3px solid rgb(25, 118, 210)",
                    background: "white",
                  }}
                >
                  <ModeEditOutlineOutlinedIcon
                    color="primary"
                    sx={{ cursor: "pointer" }}
                  />
                </FabModified>

                <Fab
                  color="white"
                  aria-label="edit"
                  sx={{
                    float: "Right",
                    width: "45px",
                    height: "45px",
                    borderColor: "red",
                    border: "3px solid red",
                    background: "white",
                  
                  }}
                >
                  <ClearOutlinedIcon sx={{ cursor: "pointer", color: "red" }} />
                </Fab>
                <Fab
                  color="white"
                  aria-label="edit"
                  sx={{
                    float: "Right",
                    width: "45px",
                    height: "45px",
                    borderColor: "red",
                    border: "3px solid rgb(16, 152, 104)",
                    background: "white",
                  }}
                >
                  <CheckIcon
                    sx={{ cursor: "pointer", color: "rgb(16, 152, 104)" }}
                  />
                </Fab>
              </Stack>
            </Box>
          </Stack>
        </Paper>
        </>
     );
}
 
export default Task;