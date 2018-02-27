export default (state = true, action) => {
	switch (action.type) {
		case 'spinner_off':
			return action.payload;
		case 'spinner_on':
			return action.payload;
		default:
			return state;
	}
};
