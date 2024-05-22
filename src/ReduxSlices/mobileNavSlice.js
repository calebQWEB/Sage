import {createSlice} from '@reduxjs/toolkit'

const mobileNavSlice = createSlice({
    name: 'mobileNav',
    initialState: {
        value: false
    },

    reducers: {
        showMobileNav: (state) => {
            state.value = true
        },
        hideMobileNav: (state) => {
            state.value = false
        }
    }
})

export const {showMobileNav, hideMobileNav} = mobileNavSlice.actions
export default mobileNavSlice.reducer