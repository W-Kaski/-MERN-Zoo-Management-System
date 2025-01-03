
import { Container, Grid, Paper } from "@mui/material";



const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    


    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AdminHomePage;
