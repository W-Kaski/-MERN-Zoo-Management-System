import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
    Box,
    Typography,
    TextField,
    Button, Container
} from '@mui/material';
import {registerUser} from "../../redux/userRelated/userHandle";

const AdminRegisterPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {status, currentUser, response, error, currentRole} = useSelector(state => state.user);

    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [adminNameError, setAdminNameError] = useState(false);
    const [zooNameError, setZooNameError] = useState(false);
    const role = "Admin"

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.adminName.value;
        const zooName = event.target.zooName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!name || !zooName || !email || !password) {
            if (!name) setAdminNameError(true);
            if (!zooName) setZooNameError(true);
            if (!email) setEmailError(true);
            if (!password) setPasswordError(true);
            return;
        }

        const fields = {name, email, password, role, zooName}
        setLoader(true)
        dispatch(registerUser(fields, role));
    };

    const handleInputChange = (event) => {
        const {data} = event.target;
        if (data === 'email') setEmailError(false);
        if (data === 'password') setPasswordError(false);
        if (data === 'adminName') setAdminNameError(false);
        if (data === 'zooName') setZooNameError(false);
    };

    useEffect(() => {
        if (status === 'success' || (currentUser !== null && currentRole === 'Admin')) {
            navigate('/Admin/Dashboard');
        } else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        } else if (status === 'error') {
            console.log(error)
        }
    }, [status, currentUser, currentRole, navigate, error, response]);

    return (
        <Container>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight="bold">
                    It's great to have you with us, Admin!
                </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center"
                 gap={2} mb={4}>
                <TextField
                    label="Please enter your zoo name"
                    id="zooName"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleInputChange}
                    sx={{borderRadius: "10px"}}
                />

                <TextField
                    label="Please enter your user name"
                    id="adminName"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleInputChange}
                    sx={{borderRadius: "10px"}}
                />

                <TextField
                    label="Please enter your email"
                    id="email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleInputChange}
                    sx={{borderRadius: "10px"}}
                />

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
                    Register
                </Button>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="body2" mr={1}>
                    Already have an account?
                </Typography>
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{cursor: "pointer", fontWeight: "bold"}}
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    Login
                </Typography>
            </Box>
        </Container>
    );
}

export default AdminRegisterPage
