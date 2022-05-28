import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as selectors from "./selectors.js"
import {ArticleApi} from "../../shared/api/api.js";

export const getOneArticle = createAsyncThunk(
    'getArticle/getOneArticle',
    async (id, thunkAPI) => {
        const {data} = await ArticleApi.getArticle(id)
        return data
    }
)

const slice = createSlice({
    name: 'getArticle',
    initialState: {
        articleInformation: {},
        errorMessage: {}
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getOneArticle.fulfilled, (state, {payload}) => {
            state.articleInformation = payload
        })
        builder.addCase(getOneArticle.rejected, (state, {payload}) => {
            state.errorMessage = payload
        })
    }
})

const {actions: sliceActions, reducer} = slice
export const articleInfoSelectors = selectors
export const articleInfoActions = sliceActions
export const articleInfoSlice = reducer