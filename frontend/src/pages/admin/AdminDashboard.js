import { useState } from "react";
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountMenu from "../../component/AccountMenu";
import SideBar from "../../component/SideBar";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return;
  <>
    <Box sx={{ display: "flex" }}>

      <CssBaseline />

      <AppBar open={open} position="absolute">
        <Toolbar sx={{ pr: "24px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Admin Dashboard
          </Typography>

          <AccountMenu />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={open ? styles.drawerStyled : styles.hideDrawer}
      >
        <Toolbar sx={styles.toolBarStyled}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <SideBar />
        </List>
      </Drawer>


    </Box>
  </>;
};

export default AdminDashboard;
