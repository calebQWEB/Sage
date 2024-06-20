import {configureStore} from '@reduxjs/toolkit'
import mobileNavReducer from '../ReduxSlices/mobileNavSlice'
import categoriesReducer from '../ReduxSlices/categoriesSlice'
import loginModalReducer from '../ReduxSlices/loginModalSlice'
import optionsBarReducer from '../ReduxSlices/optionsBar'
import quoteReducer from '../ReduxSlices/quoteSlice'

export const store = configureStore({
    reducer: {
        mobileNav: mobileNavReducer,
        categories: categoriesReducer,
        loginModal: loginModalReducer,
        options: optionsBarReducer,
        quote: quoteReducer
    }
})