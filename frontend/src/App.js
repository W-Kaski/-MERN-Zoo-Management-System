import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {useSelector} from "react-redux";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ZookeeperDashboard from "./pages/zookeeper/ZookeeperDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminRegister from "./pages/admin/AdminRegisterPage";
import ZookeeperRegister from "./pages/zookeeper/ZookeeperRegisterPage";
import ChooseUser from "./pages/ChooseUser";

const App = () => {
    const {currentRole} = useSelector(state => state.user);
    return (
        <Router>
            {currentRole === null && (
                <Routes>
                    <Route path="/" element={<ChooseUser/>}/>
                    <Route path="/AdminLogin" element={<LoginPage role="Admin"/>}/>
                    <Route path="/ZookeeperLogin" element={<LoginPage role="Zookeeper"/>}/>
                    <Route path="/Register" element={<RegisterPage/>}/>
                    <Route path="/AdminRegister" element={<AdminRegister/>}/>
                    <Route path="/ZookeeperRegister" element={<ZookeeperRegister/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            )}

            {currentRole === "Admin" && (
                <Routes>
                    <Route path="/Admin/Dashboard" element={<AdminDashboard/>}/>
                </Routes>
            )}

            {currentRole === "Zookeeper" && (
                <Routes>
                    <Route path="/Zookeeper/Dashboard" element={<ZookeeperDashboard/>}/>
                </Routes>
            )}
        </Router>
    );
}

export default App;
