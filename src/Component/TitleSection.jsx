import Typography from "@mui/material/Typography";

const TitleSection = () => {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        p={1.5}
        sx={{ fontFamily: "Rubik,sans-serief" }}
      >
        My Tasks of day
      </Typography>
    </>
  );
};

export default TitleSection;
