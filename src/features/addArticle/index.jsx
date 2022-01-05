import style from './ui/ui.module.css'
import {Button, LinkStyled} from "./ui/StyledComponents.js";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

export const AddArticleButton = () => {
    return (
        <Button>
            <LinkStyled to={'/'}>
                <Typography
                    sx={{p: '0 16px'}}
                    component={'div'}
                >
                    Новая запись
                </Typography>
            </LinkStyled>
        </Button>
    )
}