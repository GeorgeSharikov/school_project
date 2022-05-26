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

export const getArticlesTotalCount = createAsyncThunk(
    'article/getArticlesTotalCount',
    async (params, thunkAPI) => {
        const {data} = await ArticleApi.getArticlesTotalCount(params)
        return data
    }
)

const slice = createSlice({
    name: 'article',
    initialState: {
        feedArticles: [],
        totalArticlesCount: 0,
        isFetching: true
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getFeedArticles.fulfilled, (state, {payload}) => {
            state.feedArticles = [...state.feedArticles, ...payload]
            state.isFetching = false
        })
        builder.addCase(getArticlesTotalCount.fulfilled, (state, {payload}) => {
            state.totalArticlesCount = payload.totalCount
        })
    }
})

const {actions: sliceActions, reducer} = slice
export const articleSelectors = selectors
export const articleActions = sliceActions
export const articleSlice = reducer