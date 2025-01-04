import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material';

const RegisterPage = () => {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const {status, currentUser, currentRole} = useSelector(state => state.user);

    // const [loader, setLoader] = useState(false)
    // const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const navigateHandler = (user) => {
        if (user === 'Admin') {
            navigate('/AdminRegister')

        } else if (user === 'Zookeeper') {
            navigate('/ZookeeperRegister')
        }
    }

    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') {
                navigate('/Admin/Dashboard')

            } else if (currentRole === 'Zookeeper') {
                navigate('/Zookeeper/Dashboard')
            }

        } else if (status === 'error') {
            // setLoader(false)
            setMessage("Network Error")
            // setShowPopup(true)
        }
    }, [status, currentUser, currentRole, navigate]);

    return (
        <Container>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight="bold">
                    Please Choose the Account You Would Like to Create
                </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center" gap={2} mb={4}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{borderRadius: '20px', textTransform: 'none'}}
                    onClick={() => navigateHandler('Admin')}
                >
                    Register Admin Account
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{borderRadius: '20px', textTransform: 'none'}}
                    onClick={() => navigateHandler('Zookeeper')}
                >
                    Register Zookeeper Account
                </Button>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="body2" mr={1}>
                    Already have an account?
                </Typography>
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{cursor: 'pointer', fontWeight: 'bold'}}
                    onClick={() => navigate('/')}
                >
                    Login
                </Typography>
            </Box>
        </Container>
    );
};

export default RegisterPage;
