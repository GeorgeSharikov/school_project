import {Button, LinkStyled} from "./ui/StyledComponents.js";
import Typography from "@mui/material/Typography";
import {userAuthActions, userAuthSelectors} from "../../store/userAuthSlice/slice.js";
import { useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import { ArticleEditorModal } from "../createArticle/ModalArticleEditor/index.jsx";
import {LoginModal} from "../loginModal/index.js";
import {useActions} from "../../shared/hooks/useActions.jsx";

export const AddArticleButton = () => {
    const {setLoginIsOpen} = useActions(userAuthActions)
    const isLoginModalOpen = useSelector(state => userAuthSelectors.getIsLoginModalOpen(state))
    const isAuth = useSelector(state => userAuthSelectors.getIsUserAuth(state))

    const [isLoginOpen, setIsLoginOpen] = useState(isLoginModalOpen)
    const [isOpenEditorOpen, setIsOpenEditorOpen] = useState(false)

    const handleEditorModalClose = () => setIsOpenEditorOpen(!isOpenEditorOpen)

    const handleOpen = () => {
        if(isAuth){
            setIsOpenEditorOpen(true)
        }else{
            setLoginIsOpen(true)
        }
    }

    useEffect(() => {
        setIsLoginOpen(isLoginModalOpen)
    }, [isLoginModalOpen])

    return (
        <>
            <Button>
                <LinkStyled onClick={handleOpen}>
                    <Typography
                        sx={{p: '0 16px'}}
                        component={'div'}
                    >
                        Новая запись
                    </Typography>
                </LinkStyled>
            </Button>
            {isAuth
                ? isOpenEditorOpen ? <ArticleEditorModal isVisible={isOpenEditorOpen} handleClose={handleEditorModalClose}/> : null
                : isLoginOpen ? <LoginModal isModalVisible={isLoginOpen}
                                       closeHandler={() => setLoginIsOpen(false)}
                                       /> : null
            }
        </>

    )
}