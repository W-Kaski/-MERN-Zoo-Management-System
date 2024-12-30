import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDashboard from "./components/AdminDashboard";
import ZookeeperDashboard from "./components/ZookeeperDashboard";
import LoginPage from "./pages/LoginPage";
import AdminRegister from "./pages/admin/AdminRegister";
import ZookeeperRegister from "./pages/zookeeper/ZookeeperRegister";
import ChooseUser from "./pages/ChooseUser";

function App() {
  const currentRole = useSelector((state) => state.user.role);
  return (
    <Router>
      {currentRole === null && (
        <Routes>
          {/* 选择用户 */}
          <Route path="/choose-user" element={<ChooseUser />} />
          <Route path="/AdminLogin" element={<LoginPage />} />
          <Route path="/ZookeeperLogin" element={<LoginPage />} />
          <Route path="/AdminRegister" element={<AdminRegister />} />
          <Route path="/ZookeeperRegister" element={<ZookeeperRegister />} />
          <Route path="*" element={<Navigate to="/choose-user" />} />
        </Routes>
      )}

      {currentRole === "Admin" && (
        <>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </>
      )}

      {currentRole === "Zookeeper" && (
        <>
          <Route path="/ZookeeperDashboard" element={<ZookeeperDashboard />} />
        </>
      )}
    </Router>
  );
}

export default App;
