import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"
import { getPeronalDataSelector } from "../../../store/userPersonalData/selectors"
import styles from './ui.module.css'

export const SmallAvatar = () => {
    const {avatar, firstName} = useSelector(state => getPeronalDataSelector(state))
    const firstLetter = firstName?.split('')[0]
    return (
        !!!avatar 
        ? <div style={{backgroundImage: `url(${avatar})`}} className={styles.subImg}/>
        : <Avatar style={{width: '22px', height: '22px'}}className={styles.ava}>{firstLetter}</Avatar>
    )
}