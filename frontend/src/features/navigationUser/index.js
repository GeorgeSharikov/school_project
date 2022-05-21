import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userAuthSelectors } from '../../store/userAuthSlice/slice';
import { NavLink } from 'react-router-dom';
import styles from './ui/ui.module.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Avatar} from '@mui/material';
import { personalDataSelectors } from '../../store/userPersonalData/slice';
import { LoginModal } from '../loginModal';
import Skeleton from "@mui/material/Skeleton";

export const NavigationUser = (props) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const id = useSelector(state => userAuthSelectors.getUserPersonalId(state))
    const isAuth = useSelector(state => userAuthSelectors.getIsUserAuth(state))
    const userData = useSelector(state => personalDataSelectors.getPeronalDataSelector(state))
    const isFetching = useSelector(state => personalDataSelectors.getIsFetching(state))

    const openHandler = () => setModalVisible(true)
    const closeHandler = () => setModalVisible(false)
    return (
        <div>
            {isFetching
                ? <Skeleton variant="rectangular" width={140} height={30} />
                : isAuth ? <NavLink to={`/profile/${id}`}>
                                <Avatar>{userData.firstName}</Avatar>
                    </NavLink>
                    : <div className={styles.signIn} onClick={openHandler}>
                        <PersonOutlineIcon sx={{marginRight: '8px', fontSize: '30px'}}/>
                        <span>
                            Войти
                        </span>
                    </div>
            }
            {isModalVisible
            ? <LoginModal isModalVisible={isModalVisible} closeHandler={closeHandler} setModalVisible={setModalVisible}/>
            : null}
        </div>
    );
}
