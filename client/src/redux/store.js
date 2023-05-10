
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Features/userApi";
import messageSlice from "../redux/Slice/messageSlice";

const store = configureStore({
    reducer: {messageSlice,[userApi.reducerPath]: userApi.reducer},
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
    
})

export default store;