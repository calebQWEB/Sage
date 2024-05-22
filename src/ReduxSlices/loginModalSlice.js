import {createSlice} from '@reduxjs/toolkit'

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: {
        value: false
    },

    reducers: {
        showLoginModal: (state) => {
            state.value = true
        },
        hideLoginModal: (state) => {
            state.value = false
        }
    }
})

export const {showLoginModal, hideLoginModal} = loginModalSlice.actions
export default loginModalSlice.reducer