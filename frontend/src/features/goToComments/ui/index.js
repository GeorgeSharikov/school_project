import React from 'react';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import styles from './styles.module.css'
import {NavLink} from "react-router-dom";

export const CommentsIconLink = ({commentsAmount}) => {
    return (
        <div className={styles.comments}>
            <NavLink to={'/comments'} className={styles.commentCounter}>
                <span className={styles.commentsIcon}>
                    <ModeCommentOutlinedIcon />
                </span>
                <span className={styles.commentsAmount}>{commentsAmount}</span>
            </NavLink>
        </div>
    );
}
