import React, {} from 'react';
import {getArticlesTotalCount, getBookmarks, getFeedArticles} from "./model/slice.js";
import {BlockOfArticle} from "../../entities/BlockOfArticle/index.jsx";

export const ShowArticles = () => {

    return (
        <BlockOfArticle getArticles={(page) => getFeedArticles(page)}
                        amount={5}
                        getTotalCount={() => getArticlesTotalCount({isModerated: true, id: null})}
                        showDelOpt={false}
                        showOpt={false}
                        showEditOpt={false}
                        />
    );
}
