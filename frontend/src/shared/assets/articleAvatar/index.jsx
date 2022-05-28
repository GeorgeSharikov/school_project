import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './styles.module.css'
import Avatar from "@mui/material/Avatar";

export const ArticleAvatar = ({author, authorId}) => {
    return (
        <NavLink to={`/profile/${authorId}`} className={`${styles.headerItem} ${styles.author}`}>
            <Avatar variant="rounded" className={styles.avatar} style={{width: 22, height: 22}}>
                {author[0].toUpperCase()}
            </Avatar>
            <div>{author}</div>
        </NavLink>
    );
}
