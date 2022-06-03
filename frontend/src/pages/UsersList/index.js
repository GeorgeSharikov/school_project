import React, {useEffect, useState} from 'react';
import {UserApi} from "../../shared/api/api.js";
import LockResetIcon from '@mui/icons-material/LockReset';
import styles from './styles.module.css'
import {Link} from "react-router-dom";
import {NotificationManager} from "react-notifications";

export const UserList = (props) => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        UserApi.getAllUsers().then((res) => {
            setUserList(res)
        })
    }, [])

    const resetPassword = async (id) => {
        try {
            await UserApi.resetUserPassword(id)
            NotificationManager.success('Пароль сброшен.','',2000)
        }catch (e) {
            NotificationManager.error('Ошибка.','',2000)
        }
    }

    return (
        <div>
            {userList.map(({firstName, lastName, id}) => {
                const author = `${firstName} ${lastName}`
                return <div key={id} className={styles.wrap}>
                    <Link to={`/profile/${id}`} className={styles.item}>
                        <div>{author}</div>
                    </Link>
                    <button className={styles.btn} title={'Сбрасывает пароль на 1234567'} onClick={() => resetPassword(id)}>
                        <div>Сбросить пароль</div>
                        <LockResetIcon />
                    </button>
                </div>
            })}
        </div>
    );
}
