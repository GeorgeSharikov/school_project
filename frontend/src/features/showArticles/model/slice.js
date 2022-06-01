import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ArticleApi} from "../../../shared/api/api.js";
import * as selectors from './selectors.js'

export const getFeedArticles = createAsyncThunk(
    'article/getFeedArticles',
    async (page, thunkAPI) => {
        const {data} = await ArticleApi.getFeedArticlesByPortions(page)
        return data
    }
)

export const getFeedArticlesById = createAsyncThunk(
    'article/getFeedArticlesById',
    async ({page, id}, thunkAPI) => {
        const {data} = await ArticleApi.getFeedArticlesById(page, id)
        return data
    }
)

export const getArticlesTotalCount = createAsyncThunk(
    'article/getArticlesTotalCount',
    async (params, thunkAPI) => {
        const {data} = await ArticleApi.getArticlesTotalCount(params)
        return data
    }
)


export const addBookmark = createAsyncThunk(
    'article/addBookmark',
    async (articleId, thunkAPI) => {
        const {data} = await ArticleApi.addBookmark(articleId)
        return data
    }
)

export const getBookmarks = createAsyncThunk(
    'article/getBookmarks',
    async (params, thunkAPI) => {
        const {data} = await ArticleApi.getBookmarks()
        return data
    }
)

const slice = createSlice({
    name: 'article',
    initialState: {
        feedArticles: [],
        totalArticlesCount: 0,
        userBookmarks: [],
        isFetching: true
    },
    reducers: {
        setFeedArticles(state, {payload}){
            state.feedArticles = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getFeedArticles.fulfilled, (state, {payload}) => {
            state.feedArticles = [...state.feedArticles, ...payload]
            state.isFetching = false
        })
        builder.addCase(getFeedArticlesById.fulfilled, (state, {payload}) => {
            state.feedArticles = [...state.feedArticles, ...payload]
            state.isFetching = false
        })
        builder.addCase(getArticlesTotalCount.fulfilled, (state, {payload}) => {
            state.totalArticlesCount = payload.totalCount
        })
        builder.addCase(addBookmark.fulfilled, (state, {payload}) => {
            state.userBookmarks = payload
        })
        builder.addCase(getBookmarks.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.userBookmarks = payload
        })
    }
})

const {actions: sliceActions, reducer} = slice
export const articleSelectors = selectors
export const articleActions = sliceActions
export const articleSlice = reducer