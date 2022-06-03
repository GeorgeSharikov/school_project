import styles from './ui.module.css'
import React, {useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ExpandingTextarea from "react-expanding-textarea";
import {UserApi} from "../../shared/api/api.js";
import {NotificationManager} from "react-notifications";

export const ProfileStatus = ({status, isMyOwn}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState(status)
    const [statusText, setStatusText] = useState(status)

    const changeStatus = async () => {
        try{
            const {statusData} = await UserApi.changeStatus(value)
            setValue(statusData)
            setStatusText(statusData)
            setIsOpen(false)
        }catch (e) {
            NotificationManager.error('Ошибка', '', 2000)
        }
    }

    useEffect(() => {
        setValue(status)
        setStatusText(status)
    }, [status])
    return(
        <div className={styles.status}>
            <div className={styles.text}>{statusText}</div>
            {isMyOwn && <div className={styles.changeStatus} onClick={() => setIsOpen(true)}>Изменить статус</div>}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} >
                <DialogTitle>Изменить статус</DialogTitle>
                <DialogContent>
                    <ExpandingTextarea
                        autoFocus
                        placeholder="Статус"
                        maxLength="120"
                        className={styles.inputTitle}
                        style={{minHeight: 20, overflowY: 'hidden'}}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Отмена</Button>
                    <Button onClick={changeStatus}>Изменить</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}