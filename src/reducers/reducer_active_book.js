//State argument is not application state, it is the state the reducer is responsible for
export default function (state = null, action) {
	switch(action.type){
		case 'BOOK_SELECTED':
			//Note never mutate state here, always return new version (object)
			return action.payload
	}

	return state;
}