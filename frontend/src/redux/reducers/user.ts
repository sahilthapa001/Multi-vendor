import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {});
