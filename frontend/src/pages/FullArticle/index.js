import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {articleInfoSelectors, getOneArticle} from "../../features/getArticle/slice.js";
import './ui/styles.css'
import {ArticleAvatar} from "../../shared/assets/articleAvatar/index.jsx";
import {ArticleDate} from "../../shared/assets/articleDate/index.jsx";

export const FullArticle = (props) => {
    const dispatch = useDispatch()

    const {id} = useParams()
    const {content, title, userId, first_name: firstName, last_name: lastName, like_count: likeCount, createdAt} = useSelector(state => articleInfoSelectors.getArticleInfo(state))

    useEffect(() => {
        dispatch(getOneArticle(id))
    }, [dispatch, id])

    return (
        <div className={'page-wrapper'}>
                <div className={'content_wrapper'}>
                        <div className={'content_header I-island-a'}>
                            <ArticleAvatar author={`${firstName} ${lastName}`} authorId={userId}/>
                            <ArticleDate date={createdAt}/>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: content}}/>
                </div>
        </div>

    );
}
