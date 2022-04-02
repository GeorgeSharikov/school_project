import { configureStore } from "@reduxjs/toolkit";
import {sideBarToggleSlice} from "../features/sidebarToggle/model/slice.js";
import { userAuthSlice } from "./userAuthSlice/slice.js";

export const store = configureStore({
    reducer: {
        sideBarToggle: sideBarToggleSlice,
        userAuth: userAuthSlice
    }
})