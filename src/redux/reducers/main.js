import {
    LOAD_JOBS,
    LOAD_MORE_JOBS,
    LOAD_MORE_FREELANCERS,
    LOAD_FREELANCERS,
} from "../types/types";

const initialState = {
    jobs: null,
    next: null,
    prev: null,
    count: null,
    freelancers: null,
    freelancers_next: null,
    freelancers_prev: null,
    freelancers_count: null,
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_JOBS:
            return {
                ...state,
                jobs: payload,
                next: action.next,
                prev: action.prev,
                count: action.count,
            };
        case LOAD_MORE_JOBS:
            return {
                ...state,
                jobs: [...action.old_jobs, ...action.new_jobs],
                next: action.next,
                prev: action.prev,
                count: action.count,
            };
        case LOAD_FREELANCERS:
            return {
                ...state,
                freelancers: payload,
                freelancers_next: action.next,
                freelancers_prev: action.prev,
                freelancers_count: action.count,
            };
        case LOAD_MORE_FREELANCERS:
            return {
                ...state,
                freelancers: [...action.old_data, ...action.new_data],
                freelancers_next: action.next,
                freelancers_prev: action.prev,
                freelancers_count: action.count,
            };

        default:
            return state;
    }
}
