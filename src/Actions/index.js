import {GET_REPO} from "../Constants/Action-types";

export const getRepo = repo => ({
    type:GET_REPO,
    payload:repo
});