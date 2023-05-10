import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
    name: "message",
    initialState: [],
    reducers: {
        SetUser: (state, action) => {
            if (action.payload) {
                state.push(action.payload)
            }
        }
    }
})


export const { SetUser } = messageSlice.actions

export default messageSlice.reducer