import styles from './ui/style.module.css'
import {Link, NavLink} from "react-router-dom";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

export const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sideBar}>
                <div className={styles.element}>
                    <NavLink to={'/articles'}  className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                        <ArticleOutlinedIcon className={styles.itemsIcons}/>
                        <p>Статьи1</p>
                    </NavLink>
                </div>
                <div className={styles.element}>
                    <NavLink to={'/bookmarks'} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                        <BookmarkBorderOutlinedIcon className={styles.itemsIcons}/>
                        <p>Закладки</p>
                    </NavLink>
                </div>
                <div className={styles.element}>
                    <NavLink to={'/authors'} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                        <PeopleOutlineOutlinedIcon className={styles.itemsIcons}/>
                        <p>Авторы</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}