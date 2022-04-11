import React, { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useSelector } from 'react-redux';
import { userAuthSelectors } from '../../store/userAuthSlice/slice';
import { NavLink } from 'react-router-dom';
import styles from './ui/ui.module.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { modalStyles } from './ui/ui';
import { LoginForm } from './loginForm/loginForm';

export const NavigationUser = (props) => {
    const [isModalVisible, setModalVisible] = useState(false)
    // const isAuth = useSelector(state => userAuthSelectors.getIsUserAuth(state))
    const isAuth = false

    const openHandler = () => setModalVisible(true)
    const closeHandler = () => setModalVisible(false)
    return (
        <div>
            {isAuth 
            ? <NavLink to='/profile:id'>
                <AccountBoxIcon sx={{fontSize: '40px', color: 'black', cursor: 'pointer'}}/>
            </NavLink>
            : <div className={styles.signIn} onClick={openHandler}>
                <PersonOutlineIcon sx={{marginRight: '8px', fontSize: '30px'}}/>
                <span>
                    Войти
                </span>
            </div>}
        {isModalVisible 
        ? <Modal
            open={isModalVisible}
            onClose={closeHandler}
        >
            <Box sx={modalStyles}>
                <div className={styles.formContainer}>
                    <div className={styles.formTitle}>Вход в аккаунт</div>
                    <LoginForm setModalVisible={setModalVisible}/>
                </div>
            </Box>
        </Modal>
        : null}
        </div>
    );
}
