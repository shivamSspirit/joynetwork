import { settings } from './auth'
import { postReducer } from './post';
import { userReducer } from './users';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	settings,
	postReducer,
	userReducer,
	router: routerReducer
})

export default rootReducer;