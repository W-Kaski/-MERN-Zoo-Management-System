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

const ZookeeperRegisterPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {status, currentUser, response, error, currentRole} = useSelector(state => state.user);

    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [IDError, setIDError] = useState(false);
    const role = "Zookeeper"

    const handleSubmit = (event) => {
        event.preventDefault();

        const ID = event.target.ID.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!ID || !email || !password) {
            if (!ID) setIDError(true);
            if (!email) setEmailError(true);
            if (!password) setPasswordError(true);
            return;
        }

        const fields = {email, password, role, ID}
        setLoader(true)
        dispatch(registerUser(fields, role));
    };

    const handleInputChange = (event) => {
        const {data} = event.target;
        if (data === 'email') setEmailError(false);
        if (data === 'password') setPasswordError(false);
        if (data === 'ID') setIDError(false);
    };

    useEffect(() => {
        if (status === 'success' || (currentUser !== null && currentRole === 'Zookeeper')) {
            navigate('/Zookeeper/Dashboard');
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
                    It's great to have you with us, Zookeeper!
                </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center"
                 gap={2} mb={4}>
                <TextField
                    label="Please enter your employee ID given by the Admin"
                    id="ID"
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

export default ZookeeperRegisterPage
