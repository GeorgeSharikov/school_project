import styles from './styles.module.css'
import {NavLink} from "react-router-dom";

export const PostHeader = ({author, sub, subImage, date}) => {
    return (
        <div className={styles.header}>
            <NavLink to={'/sub'} className={`${styles.headerItem} ${styles.author}`}>
                <div style={{backgroundImage: `url(${subImage})`}} className={styles.subImg}/>
                <div>{sub}</div>
            </NavLink>
            <NavLink to={'/author'} className={styles.headerItem}>
                <div>{author}</div>
            </NavLink>
            <div className={styles.time}>
                <time>{date}</time>
            </div>
        </div>
    );
}
