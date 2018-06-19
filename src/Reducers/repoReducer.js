import { UPDATE_REPO } from "../Actions/repoActions";

export default function repoReducer(state = null, {type, payload}) {
    switch (type){
        case UPDATE_REPO:
            return payload.repo;
        default:
            return state;
    }
}