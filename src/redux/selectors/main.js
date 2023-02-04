import { createSelector } from "reselect";

export const selectMainData = (state) => state.main;

export const selectJobs = createSelector(
    [selectMainData],
    (mainData) => mainData.jobs
);

export const selectFreelancers = createSelector(
    [selectMainData],
    (mainData) => mainData.freelancers
);
