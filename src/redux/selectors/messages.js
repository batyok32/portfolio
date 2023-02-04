import { createSelector } from "reselect";

export const selectAuthData = (state) => state.auth;

export const selectErrors = createSelector(
  [selectAuthData],
  (auth) => auth.error
);

export const selectSuccessMessages = createSelector(
  [selectAuthData],
  (auth) => auth.success_message
);
