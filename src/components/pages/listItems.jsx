import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useLocation, useNavigate } from "react-router-dom";
const MainListItems = () => {
  const location = useLocation();
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <ListItemButton
        onClick={()=>navigate("/home")}
        selected={`/home` === location.pathname}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItemButton>
      <ListItemButton
        onClick={()=>navigate("/data")}
        selected={`/data` === location.pathname}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Data" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainListItems;
