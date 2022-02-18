import {Button, LinkStyled} from "./ui/StyledComponents.js";
import Typography from "@mui/material/Typography";

export const AddArticleButton = () => {
    return (
        <Button>
            <LinkStyled to={'/writing=0'}>
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