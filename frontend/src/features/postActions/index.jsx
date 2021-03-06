import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './ui/styles.module.css'
import {useRef, useState} from "react";
import {useOnClickOutside} from "../../shared/hooks/useClickOutside.jsx";
import {ArticleApi} from "../../shared/api/api.js";
import {EditArticleEditorModal, EditArticleEditorModalAdmin} from "../createArticle/ModalArticleEditor/index.jsx";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {NotificationManager} from "react-notifications";

export const PostActions = ({showEditAction, showDelAction, articleId, adminOptions}) => {
    const [isEditorOpen, setIsEditorOpen] = useState(false)
    const [isAdminEditorOpen, setIsAdminEditorOpen] = useState(false)

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [isPublishDialogOpen, setIsPublishDialogOpen] = useState(false)
    const [isDeclineDialogOpen, setIsDeclineDialogOpen] = useState(false)



    const [editorProps, setEditorProps] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const ref = useRef();
    useOnClickOutside(ref, () => setIsOpen(false))

    const getArticleForEditor = async () => {
        try {
            let {show_blocks_id: showBlocksId, title, id, json_article_data: jsonData} = await ArticleApi.getArticleForEditor(articleId)
            showBlocksId = showBlocksId.split(" ")
            jsonData = JSON.parse(jsonData)
            console.log(jsonData)
            setEditorProps({showBlocksId, title, id, jsonData})
            if(adminOptions){
                setIsAdminEditorOpen(true)
            }else{
                setIsEditorOpen(true)
            }
        }catch (e) {
            console.log(e)
        }
    }

    const deleteArticle = async () => {
        try {
            await ArticleApi.delete(articleId)
            setIsDeleteDialogOpen(false)
            NotificationManager.success('???????????? ??????????????.', '', 2000)
        }catch (e) {
            console.log(e)
            NotificationManager.error('???????????? ???? ??????????????.', '', 2000)
            setIsDeleteDialogOpen(false)
        }
    }

    const publish = async () => {
        try{
            await ArticleApi.publish(articleId)
            NotificationManager.success('???????????? ????????????????????????.', '', 2000)
            setIsPublishDialogOpen(false)
        }catch (e) {
            NotificationManager.error('???????????? ???? ????????????????????????..', '', 2000)
            console.log('Saving failed: ', e)
        }
    }

    const decline = async () => {
        try{
            await ArticleApi.decline(articleId)
            NotificationManager.success('???????????? ????????????????.', '', 2000)
            setIsDeclineDialogOpen(false)
        }catch (e) {
            NotificationManager.error('???????????? ???? ????????????????.', '', 2000)
            console.log('Saving failed: ', e)
        }
    }

    return (
        <div>
            <MoreVertIcon className={styles.actions} onClick={() => setIsOpen(true)}/>
            {isOpen && <div className={styles.actionsContainer} ref={ref}>
                    <div className={styles.actionContent}>
                        {showDelAction && <div className={styles.actionItem} onClick={() => setIsDeleteDialogOpen(true)}>??????????????</div>}
                        {showEditAction && <div className={styles.actionItem} onClick={getArticleForEditor}>??????????????????????????</div>}
                        {adminOptions && <div className={styles.actionItem} onClick={() => setIsPublishDialogOpen(true)}>????????????????????????</div>}
                        {adminOptions && <div className={styles.actionItem} onClick={() => setIsDeclineDialogOpen(true)}>????????????????</div>}
                    </div>
            </div>}
            {isEditorOpen && <EditArticleEditorModal isVisible={isEditorOpen} handleClose={() => setIsEditorOpen(false)} articleData={editorProps}/>}
            {isAdminEditorOpen && <EditArticleEditorModalAdmin isVisible={isAdminEditorOpen} handleClose={() => setIsAdminEditorOpen(false)} articleData={editorProps}/>}

            <Dialog
                open={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
            >
                <DialogTitle id="alert-dialog-title">
                    {"??????????????"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {'???? ?????????????? ?????????????? ?????????????'}
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setIsDeleteDialogOpen(false)}>????????????</Button>
                        <Button onClick={deleteArticle} autoFocus>
                            ??????????????
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

            <Dialog
                open={isPublishDialogOpen}
                onClose={() => setIsPublishDialogOpen(false)}
            >
                <DialogTitle id="alert-dialog-title">
                    {"????????????????????????"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {'???? ???????????? ???????????????????????? ?????????????'}
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setIsPublishDialogOpen(false)}>????????????</Button>
                        <Button onClick={publish} autoFocus>
                            ????????????????????????
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

            <Dialog
                open={isDeclineDialogOpen}
                onClose={() => setIsDeclineDialogOpen(false)}
            >
                <DialogTitle id="alert-dialog-title">
                    {"?????????????????? ???????????? ??????????"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {'???? ???????????? ???????????????????????? ?????????????'}
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setIsDeclineDialogOpen(false)}>????????????</Button>
                        <Button onClick={decline} autoFocus>
                            ??????????????????
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}
