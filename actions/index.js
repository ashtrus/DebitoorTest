export const selectRepo = (repo) => {
  ({
    type: 'select_repo',
    payload: repo
  });
};

export const fetchGitHubRepos = () => {
  return (dispatch) => {
    fetch('https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=100&order=desc')
      .then(res => res.json())
      .then(resJson => {
        dispatch({
          type: 'github_fetch_success',
          payload: resJson.items
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }
};
