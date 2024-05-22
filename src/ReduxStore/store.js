import {configureStore} from '@reduxjs/toolkit'
import mobileNavReducer from '../ReduxSlices/mobileNavSlice'
import categoriesReducer from '../ReduxSlices/categoriesSlice'
import loginModalReducer from '../ReduxSlices/loginModalSlice'
import optionsBarSlice from '../ReduxSlices/optionsBar'

export const store = configureStore({
    reducer: {
        mobileNav: mobileNavReducer,
        categories: categoriesReducer,
        loginModal: loginModalReducer,
        options: optionsBarSlice 
    }
})