import {Link, Outlet, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSelectors } from "../../store/userAuthSlice/slice";
import { getOtherPersonalData, getPersonalData, personalDataSelectors } from "../../store/userPersonalData/slice";
import { useEffect } from "react";
import styles from './ui.module.css'
import { ProfileAvatar } from "../../features/avatar";
import { ProfileStatus } from "../../features/status";

export const Profile = (props) => {
    const dispatch = useDispatch()

    const {id} = useParams()
    const myId = useSelector(state => userAuthSelectors.getUserPersonalId(state)) 
    const isMyOwn = Number(id) === myId
    useEffect(() => {
        if(isMyOwn){
            dispatch(getPersonalData())
        }else{
             dispatch(getOtherPersonalData({id}))
        }
    }, [isMyOwn,id,dispatch])

    const userData = useSelector(state => personalDataSelectors.getPeronalDataSelector(state, isMyOwn))
    return (
        <div className={styles.wrapper}>
            <div className={styles.profileHeaderWrapper}>
                    <ProfileAvatar ava={userData.avatar}/>
                    <h1 className={styles.name}>{userData.firstName}{userData.lastName}</h1>
                    <ProfileStatus status={userData.status}/>
                    <div className={styles.headerTabs}>
                        <div className={styles.tabsList}>
                            <Link to='' className={styles.tab}>
                                <span>Статьи</span>
                            </Link>
                            <Link to='drafts' className={styles.tab}>
                                <span>Черновики</span>
                            </Link> 
                        </div>
                    </div>
            </div>

            <div className={styles.profileContentWrapper}>
                <Outlet />
            </div>
        </div>
    );
}
