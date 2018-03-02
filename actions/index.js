export const fetchGitHubRepos = () => {
	return (dispatch) => {
		this.fetch('https://api.github.com/search/repositories?q=stars:>1000&sort=stars&per_page=100&order=desc')
			.then(res => res.json())
			.then(resJson => {
				const repos = resJson.items;
				dispatch({
					type: 'github_fetch_success',
					payload: repos
				});
				dispatch(turnOffSpinner());
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const turnOffSpinner = () => ({
	type: 'spinner_off',
	payload: false
});

export const turnOnSpinner = () => ({
	type: 'spinner_on',
	payload: true
});

export const fetchSearchedGitHubRepos = (val) => {
	return (dispatch) => {
		dispatch(turnOnSpinner());

		if (val !== '' || undefined) {
			this.fetch(`https://api.github.com/search/repositories?q=${val}&per_page=100&sort=stars&order=desc`)
				.then(res => res.json())
				.then(resJson => {
					const repos = resJson.items;
					dispatch({
						type: 'github_search_fetch_success',
						payload: repos
					});
					dispatch(turnOffSpinner());
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			dispatch(fetchGitHubRepos());
		}
	};
};
