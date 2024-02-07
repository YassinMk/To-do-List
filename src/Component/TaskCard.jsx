import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import NavigationBar from "./NavigationBar";

const TaskCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 600,
        bgcolor: "white",
        height: "500px",
        width: "100%",
        borderRadius: "2%",
        padding: ".85em",
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography
          variant="h4"
          component="h1"
          p={1.5}
          sx={{ fontFamily: "Rubik,sans-serief" }}
        >
          My Tasks
        </Typography>
        <Divider flexItem sx={{ marginTop: "2" }} />
        <NavigationBar />
      </Stack>
    </Card>
  );
};

export default TaskCard;
