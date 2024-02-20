import BottomNavigation from "@mui/material/BottomNavigation";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Divider from "@mui/material/Divider";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RedButtonNavigation = styled(BottomNavigationAction)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "red",
    backgroundColor: "#ffebee",
  },
});
const GreenButtonNavigation = styled(BottomNavigationAction)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "green",
    backgroundColor: "#e8f5e9",
  },
});
const BlueButtonNavigation = styled(BottomNavigationAction)({
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "#e3f2fd",
  },
});

const NavigationBar = () => {
  const [value, setValue] = useState(4);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        navigate("/incomplete");
        break;
      case 2:
        navigate("/complete");
        break;
      case 4:
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      p={2}
      mt={2}
      sx={{
        "& .MuiBottomNavigationAction-label": {
          fontFamily: "Rubik, sans-serif",
        },
        border: "1px solid rgb(224, 224, 224) ",
        borderRadius: "5px",
        marginTop: "1.5em",
        width: "350px",
      }}
    >
      <RedButtonNavigation label="Incomplete" icon={<HighlightOffIcon />} />

      <Divider orientation="vertical" flexItem />

      <GreenButtonNavigation
        label="Complete"
        icon={<PlaylistAddCheckRoundedIcon />}
      />

      <Divider orientation="vertical" flexItem />

      <BlueButtonNavigation
        label="All Tasks"
        icon={<AssignmentRoundedIcon />}
      />
    </BottomNavigation>
  );
};

export default NavigationBar;
