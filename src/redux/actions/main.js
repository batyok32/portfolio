import {
    LOAD_JOBS,
    LOAD_MORE_JOBS,
    LOAD_FREELANCERS,
    LOAD_MORE_FREELANCERS,
} from "../types/types";

import errors from "./../messages/errors.json";
import success from "./../messages/success.json";
import axios from "axios";
import { authConfig, config } from "../utils/config";

export const load_jobs = (conf, oldJobs) => async (dispatch) => {
    // console.log("Loading jobs");
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_VERSION_URL}/jobs/?${conf}`,
            config
        );
        if (Array.isArray(oldJobs)) {
            dispatch({
                type: LOAD_MORE_JOBS,
                old_jobs: oldJobs,
                new_jobs: res.data.results,
                next: res.data.next,
                prev: res.data.prev,
                count: res.data.count,
            });
        } else {
            dispatch({
                type: LOAD_JOBS,
                payload: res.data.results,
                next: res.data.next,
                prev: res.data.prev,
                count: res.data.count,
            });
        }

        return res.data.results;
    } catch (error) {
        return;
        // console.log("Not authenticated");
    }
};
export const load_freelancers = (conf, oldData) => async (dispatch) => {
    console.log("Loading freelancers");
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/credentials/freelancer/?${conf}`,
            config
        );
        if (Array.isArray(oldData)) {
            dispatch({
                type: LOAD_MORE_FREELANCERS,
                old_data: oldData,
                new_data: res.data.results,
                next: res.data.next,
                prev: res.data.prev,
                count: res.data.count,
            });
        } else {
            dispatch({
                type: LOAD_FREELANCERS,
                payload: res.data.results,
                next: res.data.next,
                prev: res.data.prev,
                count: res.data.count,
            });
        }

        return res.data.results;
    } catch (error) {
        return error;
        // console.log("Not authenticated");
    }
};

export const get_profession = (id) => async (dispatch) => {
    console.log("Loading profession");
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_VERSION_URL}/professions/${id}/`,
            config
        );

        return res.data;
    } catch (error) {
        console.log("Not authenticated");
    }
};

export const search_professions = (searchValue) => async (dispatch) => {
    console.log("Searching professions", searchValue);
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_VERSION_URL}/professions/?search=${searchValue}`,
            config
        );
        return res.data.results;
    } catch (error) {
        console.log("Not authenticated");
    }
};
export const search_company = (searchValue) => async (dispatch) => {
    console.log("Searching companies", searchValue);
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/credentials/search/company/?search=${searchValue}`,
            config
        );
        return res.data.results;
    } catch (error) {
        console.log("Not authenticated");
    }
};
export const search_freelancer = (searchValue) => async (dispatch) => {
    console.log("Searching freelancers", searchValue);
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/credentials/search/freelancer/?search=${searchValue}`,
            config
        );
        return res.data.results;
    } catch (error) {
        console.log("Not authenticated");
    }
};

export const load_job = (pk) => async (dispatch) => {
    console.log("Loading job", pk);
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_VERSION_URL}/jobs/${pk}/`,
            config
        );
        return res.data;
    } catch (error) {
        // console.log("Not authenticated");
    }
};
export const post_job = (jobData, user) => async (dispatch) => {
    console.log("Post job", jobData, user);
    if (localStorage.getItem("access")) {
        const body = JSON.stringify({
            name: jobData.name,
            profession: jobData.profession,
            city: jobData.city,
            min_salary: jobData.min_salary,
            max_salary: jobData.max_salary,
            after_meeting: jobData.after_meeting,
            min_experience: jobData.min_experience,
            max_experience: jobData.max_experience,
            work_time: jobData.work_time,
            skills: jobData.skills,
            description: jobData.description,
        });
        const authConfig = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${localStorage.getItem("access")}`,
                Accept: "application/json",
            },
        };
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_VERSION_URL}/jobs/`,
                body,
                authConfig
            );
            console.log("Sended", res.data);
            return res;
        } catch (error) {
            return error;
        }
    } else {
        console.log("No access token");
    }
};

export const retrieve_freelancer = (pk) => async (dispatch) => {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/credentials/freelancer/${pk}/`,
            config
        );
        return res.data;
        // console.log.log("LOADED FREELANCER: ", res);
    } catch (error) {
        // console.log("Not authenticated");
    }
};
