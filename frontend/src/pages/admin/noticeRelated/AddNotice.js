import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addStuff} from '../../../redux/userRelated/userHandle';
import {underControl} from '../../../redux/userRelated/userSlice';
import {Button, CircularProgress, Paper, TextField, Typography} from '@mui/material';

const AddNotice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {status, response, error} = useSelector(state => state.user);
    const {currentUser} = useSelector(state => state.user);

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [date, setDate] = useState('');
    const adminID = currentUser._id

    const [loader, setLoader] = useState(false);
    // const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const fields = {title, details, date, adminID};
    const address = "Notice"

    const handleSubmit = (event) => {
        event.preventDefault();

        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
        setDate(formattedDate);

        setLoader(true);
        dispatch(addStuff(fields, address));
    };

    useEffect(() => {
        if (status === 'added') {
            navigate('/Admin/notices');
            dispatch(underControl())
        } else if (status === 'error') {
            setMessage("Network Error")
            // setShowPopup(true)
            // setLoader(false)
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                maxWidth: 400,
                margin: "20px auto",
            }}
        >
            <Typography variant="h5" gutterBottom>
                Post Your Notice
            </Typography>

            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={!title && error}
                helperText={!title && error ? "Title is required" : ""}
            />

            <TextField
                label="Detail"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={detail}
                onChange={(e) => setDetails(e.target.value)}
                error={!detail && error}
                helperText={!detail && error ? "Detail is required" : ""}
            />

            <Button
                variant="contained"
                color="primary"
                sx={{ alignSelf: "flex-end", mt: 2 }}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Paper>
    );
};

export default AddNotice;