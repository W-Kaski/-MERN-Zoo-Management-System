import {useState} from 'react';
import {
    CssBaseline,
    Box,
    Toolbar, AppBar, IconButton, Typography, Drawer, Divider, List,
} from '@mui/material';
import {Navigate, Route, Routes} from 'react-router-dom';

import ZookeeperHomePage from './ZookeeperHomePage';
import ZookeeperProfile from './ZookeeperProfile';
import DisplayNotices from "../../components/DisplayNotices";
import NoticeDetail from "../../components/NoticeDetail";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountMenu from "../../components/AccountMenu";
import ZookeeperSideBar from "./ZookeeperSideBar";

const ZookeeperDashboard = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar open={open} position='absolute'>
                    <Toolbar sx={{pr: '24px'}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            Teacher Dashboard
                        </Typography>
                        <AccountMenu/>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <ZookeeperSideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar/>
                    <Routes>
                        <Route path="/" element={<ZookeeperHomePage/>}/>
                        <Route path='*' element={<Navigate to="/"/>}/>
                        <Route path="/Zookeeper/dashboard" element={<ZookeeperHomePage/>}/>
                        <Route path="/Zookeeper/profile" element={<ZookeeperProfile/>}/>
                        <Route path="/Zookeeper/notice" element={<DisplayNotices/>}/>
                        {/*<Route path="/Zookeeper/notice/:id" element={<NoticeDetail/>}/>*/}
                        <Route path="/Zookeeper/notice/1" element={<NoticeDetail/>}/>
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default ZookeeperDashboard;

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}