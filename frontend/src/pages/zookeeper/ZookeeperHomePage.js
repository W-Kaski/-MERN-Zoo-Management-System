import {Box, Button, Card, CardContent, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import DisplayNotices from "../../components/DisplayNotices";

const ZookeeperHomePage = () => {
    const {currentUser} = useSelector((state) => state.user);

    const handleAttendance = () => {
        // need modify
    }

    const numberOfMyTasks = currentUser && currentUser.zookeeperTasks;
    const numberOfCompletedTasks = currentUser && currentUser.completedTasks;
    const numberOfAvailableTasks = currentUser && currentUser.assignedVenue;
    const monthlySalary = currentUser && currentUser.monthlySalary;

    return (
        <Box sx={{padding: 3}}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            {/* Attendance */}
            <Box display="flex" justifyContent="center" mb={4}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAttendance}
                    sx={{borderRadius: '20px'}}
                >
                    Take Attendance
                </Button>
            </Box>

            <Box display="flex" flexDirection="column" gap={4}>
                {/* Notice */}
                <Box>
                    <Card>
                        <CardContent>
                            <DisplayNotices/>
                        </CardContent>
                    </Card>
                </Box>

                {/* # My Tasks */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Card sx={{flex: 1}}>
                        <CardContent>
                            <Typography variant="h6">My Tasks</Typography>
                            {/*<Typography variant="h5">{numberOfMyTasks}/{numberOfCompletedTasks}</Typography>*/}
                            <Typography variant="h5">{3}/{5}</Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* # Available Tasks */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Card sx={{flex: 1}}>
                        <CardContent>
                            <Typography variant="h6">Available Tasks</Typography>
                            {/*<Typography variant="h5">{numberOfAvailableTasks}</Typography>*/}
                            <Typography variant="h5">{10}</Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Salary */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Card sx={{flex: 1}}>
                        <CardContent>
                            <Typography variant="h6">My Salary</Typography>
                            {/*<Typography variant="h5">${monthlySalary}</Typography>*/}
                            <Typography variant="h5">${3000}</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default ZookeeperHomePage
