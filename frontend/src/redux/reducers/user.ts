import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        isAuthenticated : false,

    },
    reducers:{
        loadUser: (state,action) => {
            //
        },
    },
})


export default userSlice.reducer;
