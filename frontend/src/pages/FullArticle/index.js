import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {articleInfoActions, articleInfoSelectors, getOneArticle} from "../../features/getArticle/slice.js";
import './ui/styles.css'
import {ArticleAvatar} from "../../shared/assets/articleAvatar/index.jsx";
import {ArticleDate} from "../../shared/assets/articleDate/index.jsx";
import {Navigate} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import {useActions} from "../../shared/hooks/useActions.jsx";

export const FullArticle = (props) => {
    const {setErrorMessage, setArticleInformation} = useActions(articleInfoActions)
    const dispatch = useDispatch()

    const {id} = useParams()
    const [isFetching, setIsFetching] = useState(true)
    const {content, userId, first_name: firstName, last_name: lastName, like_count: likeCount, createdAt} = useSelector(state => articleInfoSelectors.getArticleInfo(state))
    const errorMessage = useSelector(state => articleInfoSelectors.getArticleError(state))

    useEffect(() => {
        dispatch(getOneArticle(id)).then(() => {
            setIsFetching(false)
        })
        return () => {
            setErrorMessage(null)
            setArticleInformation({})
        }
    }, [dispatch, id])
    console.log(errorMessage)
    if(errorMessage){
        return <Navigate to="/error-page-not-found" replace={true}/>
    }
    console.log(isFetching)
    return (
        <div className={'page-wrapper'}>
                <div className={'content_wrapper'}>
                    {isFetching
                        ? <div className={'page-mask'}>
                            <Skeleton variant="text" height={40}/>
                            <Skeleton variant="text" height={120}/>
                            <Skeleton variant="rectangular" width={600} height={600} />
                        </div>
                        : <>
                            <div className={'content_header I-island-a'}>
                                <ArticleAvatar author={`${firstName} ${lastName}`} authorId={userId}/>
                                <ArticleDate date={createdAt}/>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: content}}/>
                        </>
                    }

                </div>
        </div>

    );
}
