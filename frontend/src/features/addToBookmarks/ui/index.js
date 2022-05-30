import React, {useEffect, useState} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addBookmark, articleSelectors} from "../../showArticles/model/slice.js";


export const AddToBookMarks = ({articleId, authUserId}) => {
    articleId = String(articleId)
    const dispatch = useDispatch()
    const userBookmarks = useSelector(state => articleSelectors.getUserBookmarks(state))
    const [isInBookmarks, setIsInBookmarks] = useState(false)

    useEffect(() => {
        if(userBookmarks.includes(articleId)){
            setIsInBookmarks(true)
        }
    }, [userBookmarks])

    const addToBookMarks = () => {
        dispatch(addBookmark(articleId))
        if(isInBookmarks){
            setIsInBookmarks(false)
        }else{
            setIsInBookmarks(true)
        }
    }
    console.log(articleId, isInBookmarks)
    return (
        <div className={styles.bookmark}>
            {isInBookmarks
                ? <BookmarkIcon className={`${styles.bookmarkIcon} ${styles.bookmarkAddedColor}`} onClick={addToBookMarks}/>
                : <BookmarkBorderIcon className={styles.bookmarkIcon} onClick={addToBookMarks}/>
            }
        </div>
    );
}
