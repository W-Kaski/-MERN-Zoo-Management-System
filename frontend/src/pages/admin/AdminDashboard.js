import { useState } from "react";
import { Box } from "@mui/material";
import AdminSideBar from "./AdminSideBar";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AdminSideBar />
    </Box>
  );
};

export default AdminDashboard;
