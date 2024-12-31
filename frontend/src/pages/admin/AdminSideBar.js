import * as React from "react";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ReportIcon from "@mui/icons-material/Report";

const AdminSideBar = () => {
  const location = useLocation();
  return (
    <>
      <React.Fragment>
        {/* Home button - Links to admin home page */}
        <ListItemButton component={Link} to="/admin">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Finance section - Manages financial aspects */}
        <ListItemButton component={Link} to="/admin/finance">
          <ListItemIcon>
            <AccountCircleOutlinedIcon
              color={
                location.pathname.startsWith("/admin/finance")
                  ? "primary"
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Finance" />
        </ListItemButton>

        {/* Zookeeper Management - Handles zookeeper related tasks */}
        <ListItemButton component={Link} to="/admin/zookeeper">
          <ListItemIcon>
            <SupervisorAccountOutlinedIcon
              color={
                location.pathname.startsWith("/admin/zookeeper")
                  ? "primary"
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Zookeeper Management" />
        </ListItemButton>

        {/* Venue Management - Controls venue related operations */}
        <ListItemButton component={Link} to="/admin/venue">
          <ListItemIcon>
            <ClassOutlinedIcon
              color={
                location.pathname.startsWith("/admin/venue")
                  ? "primary"
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Venue Management" />
        </ListItemButton>

        {/* Animal Management - Handles animal related tasks */}
        <ListItemButton component={Link} to="/admin/animal">
          <ListItemIcon>
            <PersonOutlineIcon
              color={
                location.pathname.startsWith("/admin/animal")
                  ? "primary"
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Animal Management" />
        </ListItemButton>

        {/* Notification Management - Controls system notifications */}
        <ListItemButton component={Link} to="/admin/notification">
          <ListItemIcon>
            <AnnouncementOutlinedIcon
              color={
                location.pathname.startsWith("/admin/notification")
                  ? "primary"
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Notification Management" />
        </ListItemButton>

        {/* Complaint Management - Handles user complaints */}
        <ListItemButton component={Link} to="/admin/complaint">
          <ListItemIcon>
            <ReportIcon
              color={
                location.pathname.startsWith("/admin/complaint")
                  ? "primary"
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Complaint Management" />
        </ListItemButton>
      </React.Fragment>

      {/* Divider component with margin top and bottom of 1 unit */}
      <Divider sx={{ my: 1 }} />

      <React.Fragment>
        {/* User section - Contains user related actions */}
        <ListSubheader component="div" sx={{ color: "white" }} inset>
          User
        </ListSubheader>

        {/* Profile - View and edit admin profile */}
        <ListItemButton component={Link} to="/admin/profile">
          <ListItemIcon>
            <AccountCircleOutlinedIcon
              color={
                location.pathname.startsWith("/admin/profile")
                  ? "primary" 
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        {/* Logout - End admin session */}
        <ListItemButton component={Link} to="/admin/logout">
          <ListItemIcon>
            <ExitToAppIcon
              color={
                location.pathname.startsWith("/admin/logout")
                  ? "primary"
                  : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </React.Fragment>
    </>
  );
};

export default AdminSideBar;
