import Divider from "@mui/material/Divider";
import NavigationBar from "./NavigationBar";
import TitleSection from "./TitleSection";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TitleSection />
      <Divider flexItem sx={{ marginTop: 1, marginRight: 2, marginLeft: 2 }} />
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Layout;
