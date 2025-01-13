import {useState} from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton, AppBar, Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Navigate, Route, Routes} from 'react-router-dom';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';
import AddNotice from './noticeRelated/AddNotice';
import AccountMenu from '../../components/AccountMenu';
import DisplayNotices from "../../components/DisplayNotices";
import NoticeDetail from "../../components/NoticeDetail";
import AdminSideBar from "./AdminSideBar";

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
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
                            Admin Dashboard
                        </Typography>
                        <AccountMenu/>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        <AdminSideBar/>
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar/>
                    <Routes>
                        <Route path="/" element={<AdminHomePage/>}/>
                        <Route path='*' element={<Navigate to="/"/>}/>
                        <Route path="/Admin/dashboard" element={<AdminHomePage/>}/>
                        {/*<Route path="/Admin/profile" element={<AdminProfile/>}/>*/}

                        {/* Notice */}
                        <Route path="/Admin/addnotice" element={<AddNotice/>}/>
                        <Route path="/Admin/notices" element={<DisplayNotices/>}/>
                        {/*<Route path="/Admin/notice/:id" element={<NoticeDetail/>}/>*/}
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default AdminDashboard

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