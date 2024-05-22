import {createSlice} from '@reduxjs/toolkit'

const optionsBarSlice = createSlice({
    name: 'options',
    initialState: {
        value: false
    },

    reducers: {
        showOptions: (state) => {
            state.value = true
        },
        hideOptions: (state) => {
            state.value = false
        }
    }
})

export const {showOptions, hideOptions} = optionsBarSlice.actions
export default optionsBarSlice.reducer