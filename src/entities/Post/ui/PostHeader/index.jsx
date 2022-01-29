import styles from './styles.module.css'
import {NavLink} from "react-router-dom";

export const PostHeader = ({author, sub, subImage, date}) => {
    return (
        <div className={styles.header}>
            <NavLink to={'/sub'} className={styles.headerItem}>
                <div style={{backgroundImage: subImage}}></div>
                <div>{sub}</div>
            </NavLink>
            <NavLink to={'/author'} className={styles.headerItem}>
                {author}
            </NavLink>
            <NavLink to={'/time'}>
                {date}
            </NavLink>
        </div>
    );
}
