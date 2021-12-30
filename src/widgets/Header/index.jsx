import { Grid } from "@mui/material"

export const Header = () => {
    return (
        <Grid container spacing={5}>
            <Grid item xs={0.5}>1</Grid>
            <Grid item xs={1.5}>1</Grid>
            <Grid item xs={2}>1</Grid>
            <Grid item xs={1}>1</Grid>
            <Grid item xs={7}>1</Grid>
        </Grid>
    )
}