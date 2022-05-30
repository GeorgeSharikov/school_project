import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {articleActions, articleSelectors, getArticlesTotalCount, getFeedArticles} from "./model/slice.js";
import {PostItem} from "../../entities/Post/ui/PostItem/index.js";
import Skeleton from "@mui/material/Skeleton";
import {useActions} from "../../shared/hooks/useActions.jsx";

export const ShowArticles = () => {
    const dispatch = useDispatch()
    const {setFeedArticles} = useActions(articleActions)

    const articlesFeed = useSelector(state => articleSelectors.getArticles(state))
    const totalCount = useSelector(state => articleSelectors.totalArticlesCount(state))
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [lastElement, setLastElement] = useState(null);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPage((no) => no + 1);
                }
            })
    );



    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {

            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    useEffect(() => {
        dispatch(getArticlesTotalCount({isModerated: true, id: null}))
        return () => {
            setFeedArticles([])
        }
    }, [dispatch])
    useEffect(() => {
        console.log(page, dispatch, totalCount)
        setLoading(true)
        if(page*5 <= totalCount || (totalCount < 5 && totalCount !== 0)){
            console.log('here')
            dispatch(getFeedArticles(page))
        }
        setLoading(false)
    }, [page, dispatch, totalCount])
    return (
        <div>
                {articlesFeed.length > 0 && articlesFeed.map((el, i) => {
                    if(i === articlesFeed.length-1 && !loading && page*5 <= totalCount ){
                        return <div key={el.id} ref={setLastElement}>
                            <PostItem  post={el} />
                        </div>
                    }
                    return <PostItem post={el} key={el.id}/>
                })}
            {loading && <div>
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width={640} height={700} />
            </div>}
        </div>
    );
}
