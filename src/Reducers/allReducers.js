import userReducer from '../Reducers/userReducer';
import repoReducer from '../Reducers/repoReducer';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    user: userReducer,
    repo: repoReducer
});

export default allReducers;