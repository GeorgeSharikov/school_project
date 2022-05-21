import { configureStore } from "@reduxjs/toolkit";
import {sideBarToggleSlice} from "../features/sidebarToggle/model/slice.js";
import { userAuthSlice } from "./userAuthSlice/slice.js";
import { personalDataSlice } from "./userPersonalData/slice.js";
import {articleSlice} from "../features/showArticles/model/slice.js";

export const store = configureStore({
    reducer: {
        sideBarToggle: sideBarToggleSlice,
        userAuth: userAuthSlice,
        personalData: personalDataSlice,
        article: articleSlice
    }
})