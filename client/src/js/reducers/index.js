import { combineReducers } from "redux";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import { reducer as reduxFormReducer } from 'redux-form';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
	userReducer,
	cartReducer,
	categoryReducer,
	productReducer,
	form: reduxFormReducer,
	routing: routerReducer
});