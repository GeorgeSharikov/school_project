import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ArticleApi} from "../../../shared/api/api.js";
import * as selectors from './selectors.js'

export const getFeedArticles = createAsyncThunk(
    'article/getFeedArticles',
    async (id, thunkAPI) => {
        const {data} = await ArticleApi.getFeedArticlesByPortions(id)
        return data
    }
)

const slice = createSlice({
    name: 'article',
    initialState: {
        feedArticles: [],
        isFetching: true
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getFeedArticles.fulfilled, (state, {payload}) => {
            state.feedArticles = payload
            state.isFetching = false
        })
    }
})

const {actions: sliceActions, reducer} = slice
export const articleSelectors = selectors
export const articleActions = sliceActions
export const articleSlice = reducer