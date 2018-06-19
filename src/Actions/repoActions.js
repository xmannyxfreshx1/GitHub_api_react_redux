export const UPDATE_REPO = 'repo:updateRepo';

export function updateRepo(newRepo) {
    return {
        type: UPDATE_REPO,
        payload:{
            repo: newRepo
        }
    }

}

export function apiRequest(props) {
    return async dispatch =>  {
            const api_call = await fetch(`https://api.github.com/users/${props}`);
            const data = await api_call.json();
            console.log(data);
            dispatch(updateRepo(data.public_repos));
            console.log(props,'this is the user');
    }
    
}