import { Grid, Typography } from "@mui/material";
import TopNav from "../navs/topNav";

const Header = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={6} justifyContent={"start"} alignItems={"center"}>   
                <Typography variant="h5">Logo</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TopNav />
            </Grid>
        </Grid>
    )
}

export default Header;