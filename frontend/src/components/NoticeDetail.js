import React from 'react';
import {useParams} from 'react-router-dom';
import {Box, Typography, CircularProgress} from '@mui/material';
import {useSelector} from 'react-redux';

const NoticeDetail = () => {
    // const {id} = useParams();
    const id = 1;
    const {noticeList, loading, error} = useSelector(state => state.notice);

    // const notice = noticeList.find((notice) => notice._id === id);
    const notice = noticeList.find((notice) => notice.id === id);

    if (loading) {
        return (
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
                <CircularProgress/>
            </Box>
        );
    }

    if (error) {
        return <Typography variant="h6" color="error">Failed to load notice details.</Typography>;
    }

    if (!notice) {
        return <Typography variant="h6" color="error">Notice not found.</Typography>;
    }

    return (
        <Box sx={{padding: "20px", maxWidth: "800px", margin: "auto"}}>
            <Typography variant="h4" fontWeight="bold" sx={{marginBottom: "20px"}}>
                {notice.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{marginBottom: "20px"}}>
                {notice.detail}
            </Typography>
            <Typography variant="body1" sx={{whiteSpace: "pre-line"}}>
                {notice.content}
            </Typography>
        </Box>
    );
};

export default NoticeDetail;
