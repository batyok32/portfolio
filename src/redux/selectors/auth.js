import { createSelector } from "reselect";

export const selectAuthData = (state) => state.auth;

export const selectAccountData = createSelector(
	[selectAuthData],
	(authData) => authData.account_data
);
