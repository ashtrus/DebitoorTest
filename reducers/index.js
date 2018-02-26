import { combineReducers } from 'redux';
import SelectReducer from './SelectReducer';
import GitHubFetchReducer from './GitHubFetchReducer';

export default combineReducers({
  selectedGitHubItemId: SelectReducer,
  repos: GitHubFetchReducer
});
