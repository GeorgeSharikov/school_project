import {Button, LinkStyled} from "./ui/StyledComponents.js";
import Typography from "@mui/material/Typography";
import { userAuthSelectors } from "../../store/userAuthSlice/slice.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ArticleEditorModal } from "../createArticle/ModalArticleEditor/index.jsx";

export const AddArticleButton = () => {
    const isAuth = useSelector(state => userAuthSelectors.getIsUserAuth(state))
    const [isOpen, setIsOpen] = useState(false)
    
    const hadnleClose = () => setIsOpen(!isOpen)
    return (
        <>
            <Button>
                <LinkStyled onClick={() => setIsOpen(true)}>
                    <Typography
                        sx={{p: '0 16px'}}
                        component={'div'}
                    >
                        Новая запись
                    </Typography>
                </LinkStyled>
            </Button>
            <ArticleEditorModal isVisible={isOpen} hadnleClose={hadnleClose}/>
        </>

    )
}