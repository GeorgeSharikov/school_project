import styles from './styles.module.css'
import {NavLink} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {toHumanDateFormat} from "../../../../shared/helpers/toHumanDateFormat.js";

export const PostHeader = ({author,date, authorId}) => {
    // toHumanDateFormat(date)
    return (
        <div className={styles.header}>
            <NavLink to={`/profile/${authorId}`} className={`${styles.headerItem} ${styles.author}`}>
                <Avatar variant="rounded" className={styles.avatar} style={{width: 22, height: 22}}>
                    {author[0].toUpperCase()}
                </Avatar>
                <div>{author}</div>
            </NavLink>
            <div className={styles.time}>
                <time>{date}</time>
            </div>
        </div>
    );
}
