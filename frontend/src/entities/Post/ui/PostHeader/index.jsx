import styles from './styles.module.css'
import {NavLink} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {ArticleAvatar} from "../../../../shared/assets/articleAvatar/index.jsx";
import {ArticleDate} from "../../../../shared/assets/articleDate/index.jsx";

export const PostHeader = ({author,date, authorId}) => {
    // toHumanDateFormat(date)
    return (
        <div className={styles.header}>
            <ArticleAvatar author={author} authorId={authorId}/>
            <ArticleDate date={date}/>
        </div>
    );
}
