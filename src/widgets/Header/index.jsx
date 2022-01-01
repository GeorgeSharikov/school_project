import { Grid } from "@mui/material"
import { SidebarToggle } from "../../features/sidebarToggle"
import style from './ui.module.css'


export const Header = () => {
    return (
            <Grid container spacing={5} className={style.container}>
                <Grid item xs={0.5}>
                    <SidebarToggle />
                </Grid>
                <Grid item xs={1.5}>1</Grid>
                <Grid item xs={2}>1</Grid>
                <Grid item xs={1}>1</Grid>
                <Grid item xs={7}>1</Grid>
            </Grid>
    )
}