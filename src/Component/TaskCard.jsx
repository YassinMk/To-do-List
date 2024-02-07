import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import NavigationBar from "./NavigationBar";
import TitleSection from "./TitleSection";

const TaskCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 600,
        bgcolor: "white",
        height: "500px",
        width: "100%",
        padding: ".85em",
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <TitleSection />
        <Divider flexItem sx={{ marginTop: "2" }} />
        <NavigationBar />
      </Stack>
    </Card>
  );
};

export default TaskCard;
