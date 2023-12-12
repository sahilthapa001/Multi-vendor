import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user";

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		//seller;
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
