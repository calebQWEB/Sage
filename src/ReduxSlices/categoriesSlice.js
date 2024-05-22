import {createSlice} from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        value: false
    },

    reducers: {
        showCategories: (state) => {
            state.value = true
        },
        hideCategories: (state) => {
            state.value = false
        }

    }
})

export const {showCategories, hideCategories} = categoriesSlice.actions
export default categoriesSlice.reducer