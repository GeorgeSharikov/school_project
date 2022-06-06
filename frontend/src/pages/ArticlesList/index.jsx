import React, {useEffect, useState} from 'react';
import {ArticleApi} from "../../shared/api/api.js";
import styles from './styles.module.css'
import {NavLink} from "react-router-dom";

export const ArticleList = (props) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        ArticleApi.getAllArticles()
            .then((res) => {
                setArticles(res)
            })
            .catch((e) => {

            })
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.item} style={{ backgroundColor: '#DCDCDC'}}>Автор статьи</div>
                <div className={`${styles.item} ${styles.title}`} style={{justifyContent: 'center',  backgroundColor: '#DCDCDC'}}>Заголовок</div>
            </div>
            {articles.map(({title, first_name, last_name, createdAt, id}, index) => {
                const author = `${first_name} ${last_name}`
                return <div style={{display: 'flex'}}>
                    <NavLink to={`/articles/${id}`}>
                        <div className={styles.itemWrapper}>
                            <div className={styles.item} style={{width: '50px'}}>{index+1}</div>
                            <div className={styles.articleInfo}>
                                <div className={styles.item}>{author}</div>
                                <div className={`${styles.item} ${styles.title}`}>{title}</div>
                            </div>
                        </div>
                    </NavLink>
                    <div className={styles.articleTools}>
                        <div>Удалить</div>
                        <div>Редактировать</div>
                    </div>
                </div>
            })}
        </div>
    );
}
