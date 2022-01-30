import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from './styles.module.css'

export const AddToBookMarks = (props) => {
    return (
        <div className={styles.bookmark}>
            <BookmarkBorderIcon className={styles.bookmarkIcon}/>
        </div>
    );
}
