import { SidebarToggle } from "../../features/sidebarToggle"
import Box from "@mui/material/Box";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import {AppBarStl, ToolbarStl} from "./ui/styledComponents.js";
import {Link} from "react-router-dom";
import {Search} from "../../features/search";
import {AddArticleButton} from "../../features/addArticle";
import {NavigationUser} from "../../features/navigationUser";

export const Header = () => {
    return (
            <AppBarStl>
                <ToolbarStl>
                    <SidebarToggle />
                    <Box sx={{pr: 2}}>
                        <Link to={'/'}>
                            <MeetingRoomIcon sx={{fontSize: 50, color: 'black'}}/>
                        </Link>
                    </Box>
                    <Search/>
                    <AddArticleButton />
                    <Box sx={{ flexGrow: 1 }} />
                    <NavigationUser />
                </ToolbarStl>
            </AppBarStl>
    )
}