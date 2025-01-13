import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Typography, CircularProgress} from '@mui/material';
import {useSelector} from 'react-redux';
import {underControl} from "../redux/userRelated/userSlice";

const NoticeDetail = () => {
    const userState = useSelector(state => state.user);
    const {status, response, error} = userState;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const params = useParams();
    console.log(params);  // temp
    const id = params.id;
    const {noticeList} = useSelector(state => state.notice);
    const notice = noticeList.find((notice) => notice._id === id);

    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (status === 'added') {
            navigate("/Admin/notices");
            dispatch(underControl());
            setLoader(true);

        } else if (status === 'failed') {
            setMessage(response)
            setLoader(false);

        } else if (status === 'error') {
            setMessage("Network Error")
            setLoader(false);
        }
    }, []);

    // if (loader) {
    //     setLoader(true);
    //     return (
    //         <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
    //             <CircularProgress/>
    //         </Box>
    //     );
    // }
    //
    // if (error) {
    //     return <Typography variant="h6" color="error">Failed to load notice details.</Typography>;
    // }
    //
    // if (!notice) {
    //     return <Typography variant="h6" color="error">Notice not found.</Typography>;
    // }

    return (
        <Box sx={{padding: "20px", maxWidth: "800px", margin: "auto"}}>
            <Typography variant="h4" fontWeight="bold" sx={{marginBottom: "20px"}}>
                {notice.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{marginBottom: "20px"}}>
                {notice.date}
            </Typography>
            <Typography variant="body1" sx={{whiteSpace: "pre-line"}}>
                {notice.detail}
            </Typography>
        </Box>
    );
};

export default NoticeDetail;
