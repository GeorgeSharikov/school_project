import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInfoApi } from "../../shared/api/api";
import * as selectors from './selectors'

export const getPersonalData = createAsyncThunk(
    'userPersonalData/getPersonalData',
    async (parametrs, thunkAPI) => {
        const {data} = await UserInfoApi.getPersonalData()
        return data
    }
)

export const getOtherPersonalData = createAsyncThunk(
    'userPersonalData/getOtherPersonalData',
    async ({id}, thunkAPI) => {
        const {data} = await UserInfoApi.getOtherPersonalData(id)
        return data
    }
)

const slice = createSlice({
    name: 'userPersonalData',
    initialState : {
        personalData : {},
        errorMessage: null,   
        otherAccountData: {},
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPersonalData.fulfilled, (state, {payload}) => {
            state.personalData = payload
        })

        builder.addCase(getPersonalData.rejected, (state, action) => {
            state.errorMessage = action.error.messages  
        })

        builder.addCase(getOtherPersonalData.fulfilled, (state, {payload}) => {
            state.otherAccountData = payload
        })

        builder.addCase(getOtherPersonalData.rejected, (state, action) => {
            state.errorMessage = action.error.messages  
        })
    }
})

const { actions: sliceActions, reducer } = slice
export const personalDataSelectors = selectors
export const personalDataActions = sliceActions
export const personalDataSlice = reducer