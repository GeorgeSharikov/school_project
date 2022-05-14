import {Button, LinkStyled} from "./ui/StyledComponents.js";
import Typography from "@mui/material/Typography";
import { userAuthSelectors } from "../../store/userAuthSlice/slice.js";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { ArticleEditorModal } from "../createArticle/ModalArticleEditor/index.jsx";
import {LoginModal} from "../loginModal/index.js";

export const AddArticleButton = () => {
    const isAuth = useSelector(state => userAuthSelectors.getIsUserAuth(state))
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClose = () => setIsOpen(!isOpen)
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
            {isAuth
                ? <ArticleEditorModal isVisible={isOpen} handleClose={handleClose}/>
                : isOpen ? <LoginModal isModalVisible={isOpen}
                                       closeHandler={() => setIsOpen(false)}
                                       setModalVisible={setIsOpen}/> : null
            }

        </>

    )
}