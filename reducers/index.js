import { combineReducers } from 'redux';
import GitHubFetchReducer from './GitHubFetchReducer';
import SpinnerReducer from './SpinnerReducer';

// repos: state in store key
export default combineReducers({
	repos: GitHubFetchReducer,
	loading: SpinnerReducer
});
