import { useState } from "react";
import { Box } from "@mui/material";
import AdminSideBar from "./AdminSideBar";
import { CssBaseline, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./AdminHomePage";

const AdminDashboard = () => {

  return (
    <>
      <Box>
        <CssBaseline />
        <AdminSideBar />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<AdminHomePage />} />
            <Route path="/Admin/dashboard" element={<AdminHomePage />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
