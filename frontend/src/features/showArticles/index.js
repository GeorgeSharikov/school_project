import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {articleSelectors, getFeedArticles} from "./model/slice.js";
import {PostItem} from "../../entities/Post/ui/PostItem/index.js";

export const ShowArticles = (props) => {
    const dispatch = useDispatch()
    const articlesFeed = useSelector(state => articleSelectors.getArticles(state))
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getFeedArticles(page))
    }, [page, dispatch])
    console.log(articlesFeed)
    return (
        <div>
            {articlesFeed.map((el) => {
                return <PostItem post={el} key={el.id}/>
            })}
        </div>
    );
}
