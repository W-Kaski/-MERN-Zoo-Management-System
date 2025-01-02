import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser, registerUser} from "../redux/userRelated/userHandle";

const LoginPage = ({role}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {status, currentUser, response, error, currentRole} = useSelector(state => state.user);

    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [IDError, setIDError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === "Admin") {
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                return;
            }

            const fields = {email, password}
            setLoader(true)
            dispatch(loginUser(fields, role))

        } else if (role === "Zookeeper") {
            const email = event.target.email.value;
            const password = event.target.password.value;
            const ID = event.target.ID.value;

            if (!email || !password || !ID) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                if (!ID) setIDError(true);
                return;
            }

            const fields = {email, ID, password}
            setLoader(true)
            dispatch(loginUser(fields, role))
        }
    }

    const handleInputChange = (event) => {
        const {data} = event.target;
        if (data === 'email') setEmailError(false);
        if (data === 'password') setPasswordError(false);
        if (data === 'ID') setIDError(false);
    };

    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') {
                navigate('/Admin/Dashboard');
            } else if (currentRole === 'Zookeeper') {
                navigate('/Zookeeper/Dashboard');
            }

        } else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)

        } else if (status === 'error') {
            setLoader(false)
            setMessage("Network Error")
            setShowPopup(true)
        }

    }, [status, currentRole, navigate, error, response, currentUser]);

    return (
        <Container>
            <Box textAlign="center" mb={4}>
                {role === "Admin" ? (
                    <Typography variant="h4" fontWeight="bold">
                        Welcome, Admin!
                    </Typography>
                ) : (
                    <Typography variant="h4" fontWeight="bold">
                        Welcome, Zookeeper!
                    </Typography>
                )}
            </Box>

            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center"
                 gap={2} mb={4}>
                <TextField
                    label="Please enter your email"
                    id="email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleInputChange}
                    sx={{borderRadius: "10px"}}
                />

                {role === "Zookeeper" ? (
                    <TextField
                        label="Please enter your employee ID"
                        id="ID"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={handleInputChange}
                        sx={{borderRadius: "10px"}}
                    />
                ) : (<></>)}

                <TextField
                    label="Please enter your password"
                    id="password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    onChange={handleInputChange}
                    sx={{borderRadius: "10px"}}
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{borderRadius: "20px", textTransform: "none"}}
                    type="submit"
                >
                    Login
                </Button>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="body2" mr={1}>
                    Don't have an account?
                </Typography>
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{cursor: "pointer", fontWeight: "bold"}}
                    onClick={() => {
                        role === "Admin" ? (
                            navigate("/AdminRegister")
                        ) : (
                            navigate("/ZookeeperRegister")
                        )
                    }}
                >
                    Sign up
                </Typography>
            </Box>
        </Container>
    )
}

export default LoginPage;