// Reducer: function that produces some ammount of state
export default (state = [], action) => {
	switch (action.type) {
		case 'github_fetch_success':
			return action.payload;
		default:
			return state;
	}
};
