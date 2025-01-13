import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllNotices} from '../redux/noticeRelated/noticeHandle';
import {Box, Button, CircularProgress, List, ListItem, ListItemText, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";

const DisplayNotices = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {currentUser, currentRole} = useSelector(state => state.user);
    const {noticeList, loading, error, response} = useSelector((state) => state.notice);

    useEffect(() => {
        if (currentRole === "Admin") {
            dispatch(getAllNotices(currentUser._id, "Notice"));
        } else {
            // dispatch(getAllNotices(currentUser.zooName._id, "Notice"));
        }
    }, [dispatch]);

    if (error) {
        console.log(error);
    }

    const handleNoticeClick = (id) => {
        navigate(`/Zookeeper/notice/${id}`);
    };


    return (
        <Box
            sx={{
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                maxWidth: "600px",
                margin: "auto",
            }}
        >

            {/* Notice Board Title */}
            <Typography
                variant="h5"
                fontWeight="bold"
                color="black"
                sx={{marginBottom: "20px", textAlign: "center"}}
            >
                Notice Board
            </Typography>

            {/* Loading */}
            {loading && (
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100px"}}>
                    <CircularProgress/>
                </Box>
            )}

            {/* Notice List */}
            {!loading && noticeList.length > 0 && (
                <List>
                    {noticeList.map((notice) => {
                        return (
                            <ListItem
                                // key={notice._id}
                                key={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px",
                                    borderBottom: "1px solid #ddd",
                                    cursor: "pointer",
                                    '&:hover': {
                                        backgroundColor: "#f1f1f1",
                                    },
                                }}
                                onClick={() => handleNoticeClick(notice._id)}
                            >
                                <ListItemText primary={notice.title} sx={{maxWidth: "70%"}}/>
                                <Typography variant="body2" color="text.secondary">
                                    {notice.date}
                                </Typography>
                            </ListItem>
                        );
                    })}
                </List>
            )}

            {/* Empty Board */}
            {!loading && noticeList.length === 0 && (
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    No notices available at the moment.
                </Typography>
            )}

            {/*Edit Notice*/}
            {currentRole === "Admin" ? (
            <Button variant="contained"
                    color="primary"
                    sx={{marginTop: "20px", display: "block", margin: "auto"}}
                    onClick={() => navigate("/Admin/addnotice")}>
                Add Notice
            </Button>
            ) : null}
        </Box>
    );
}

export default DisplayNotices;