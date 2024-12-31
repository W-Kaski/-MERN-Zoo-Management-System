import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
    Paper,
    Box,
    Container,
    CircularProgress,
    Backdrop, Typography, Button,
} from '@mui/material';

const ChooseUser = () => {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const {status, currentUser, currentRole} = useSelector(state => state.user);

    // const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState("");
    // const [showPopup, setShowPopup] = useState(false);

    const navigateHandler = (user) => {
        if (user === 'Admin') {
            navigate('/AdminLogin')

        } else if (user === 'Zookeeper') {
            navigate('/ZookeeperLogin')
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
        <Container maxWidth="sm">
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight="bold">
                    Welcome to Zoo Management System
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
                    Login as Admin
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{borderRadius: '20px', textTransform: 'none'}}
                    onClick={() => navigateHandler('Zookeeper')}
                >
                    Login as Zookeeper
                </Button>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="body2" mr={1}>
                    Don't have an account?
                </Typography>
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{cursor: 'pointer', fontWeight: 'bold'}}
                    onClick={() => navigate('/Register')}
                >
                    Sign up
                </Typography>
            </Box>
        </Container>
    );
};

export default ChooseUser;
