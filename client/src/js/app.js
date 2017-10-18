import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { generateSessionId } from './utilities';

import Main from './Main';

const app = document.getElementById('app');

console.log('app loaded');
console.log(localStorage.getItem('sessionId'));
if(localStorage.getItem('sessionId') === null) {
	const sessionId = generateSessionId();
	localStorage.setItem('sessionId', sessionId);
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
		  <Main />
	    </BrowserRouter>
	</Provider>,
app);