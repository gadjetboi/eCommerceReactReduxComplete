import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from 'styled-components';

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

injectGlobal`
	body {
	  font-family: 'Roboto', sans-serif;
	  background:;
	  position: relative;
	  font-weight:400px;
	}

	ul li {
	  list-style: none;
	}

	a:hover {
	outline: none;
	text-decoration:none;
	}

	a:focus {
	  outline:none;
	  outline-offset: 0;
	}

	a {
	  -webkit-transition: 300ms;
	  -moz-transition: 300ms;
	    -o-transition: 300ms;
	    transition: 300ms;
	}

	h1, h2, h3, h4, h5, h6 {
	  font-family: 'Roboto', sans-serif;
	}

	.btn:hover, 
	.btn:focus{
	  outline: none;
	  box-shadow: none;
	}

	.navbar-toggle {
	  background-color: #000;
	}

	a#scrollUp {
	  bottom: 0px;
	  right: 10px;
	  padding: 5px 10px;
	  background: #FE980F;
	  color: #FFF;
	  -webkit-animation: bounce 2s ease infinite;
	  animation: bounce 2s ease infinite;
	}

	a#scrollUp i{
	  font-size: 30px;
	}

	.fa-facebook:hover {
	  background: #0083C9;
	}

	.fa-twitter:hover  {
		background:#5BBCEC;
	}

	.fa-linkedin:hover  {
		background:#FF4518;
	}

	.fa-dribbble:hover  {
		background:#90C9DC;
	}

	.fa-google-plus:hover  {
		background:#CE3C2D;
	}

	.header-middle .container .row {
	  border-bottom: 1px solid #f5f5f5;
	  margin-left: 0;
	  margin-right: 0;
	  padding-bottom: 20px;
	  padding-top: 20px;
	}

	.header-middle .container .row .col-sm-4{
	  padding-left: 0;
	}

	.header-middle .container .row .col-sm-8 {
		padding-right:0;
	}

	.usa {
	  border-radius: 0;
	  color: #B4B1AB;
	  font-size: 12px;
	  margin-right: 20px;
	  padding: 2px 15px;
	  margin-top: 10px;
	}

	.usa:hover {
		background:#FE980F;
		color:#fff;
		border-color:#FE980F;
	}

	.usa:active, .usa.active {
	  background: none repeat scroll 0 0 #FE980F;
	  box-shadow: inherit;
	  outline: 0 none;
	}

	.btn-group.open .dropdown-toggle {
	  background: rgba(0, 0, 0, 0);
	  box-shadow: none;
	}

	.dropdown-menu  li  a:hover, .dropdown-menu  li  a:focus {
	  background-color: #FE980F;
	  color: #FFFFFF;
	  font-family: 'Roboto', sans-serif;
	  text-decoration: none;
	}


	.shop-menu ul li {
		display:inline-block;
	  padding-left: 15px;
	  padding-right: 15px;
	}

	.shop-menu ul li:last-child {
	  padding-right: 0;
	}


	.shop-menu ul li a {
	  background: #FFFFFF;
	  color: #696763;
	  font-family: 'Roboto', sans-serif;
	  font-size: 14px;
	  font-weight: 300;
	  padding:0;
	  padding-right: 0;
	  margin-top: 10px;
	}


	.shop-menu ul li a i{
		margin-right:3px;
	}


	.shop-menu ul li a:hover {
		color:#fe980f;
		background:#fff;
	}


	.header-bottom {
	  padding-bottom: 30px;
	  padding-top: 30px;
	}

	.navbar-collapse.collapse{
	  padding-left: 0;
	}

	.mainmenu ul li{
	  padding-right: 15px;
	  padding-left: 15px;
	}

	.mainmenu ul li:first-child{
	  padding-left: 0px;
	}

	.mainmenu ul li a {
		color: #696763;
		font-family: 'Roboto', sans-serif;
		font-size: 17px;
		font-weight: 300;
		padding: 0;
		padding-bottom: 10px;
	}

	.mainmenu ul li a:hover, .mainmenu ul li a.active,  .shop-menu ul li a.active{
		background:none;
		color:#fdb45e;
	}

	.search_box input {
	  background: #F0F0E9;
	  border: medium none;
	  color: #B2B2B2;
	  font-family: 'roboto';
	  font-size: 12px;
	  font-weight: 300;
	  height: 35px;
	  outline: medium none;
	  padding-left: 10px;
	  width: 155px;
	  background-image: url(../images/home/searchicon.png);
	  background-repeat: no-repeat;
	  background-position: 130px;
	}

	/*  Dropdown menu*/

	.navbar-header 
	.navbar-toggle .icon-bar {
	    background-color: #fff;
	}


	.nav.navbar-nav > li:hover > ul.sub-menu{
	  display: block;
	  -webkit-animation: fadeInUp 400ms;
	  -moz-animation: fadeInUp 400ms;
	  -ms-animation: fadeInUp 400ms;
	  -o-animation: fadeInUp 400ms;
	  animation: fadeInUp 400ms;
	}

	ul.sub-menu {
		position: absolute;
		top: 30px;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		list-style: none;
		padding: 0;
		margin: 0;
		width: 220px;
		-webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
		display: none;
		z-index: 999;
	}

	.dropdown ul.sub-menu li .active{
	  color: #FDB45E;
	  padding-left: 0;
	}


	.navbar-nav li ul.sub-menu li{
	  padding: 10px 20px 0 ;
	}

	.navbar-nav li ul.sub-menu li:last-child{
	  padding-bottom: 20px;
	}

	.navbar-nav li ul.sub-menu li a{
	  color: #fff;
	}

	.navbar-nav li ul.sub-menu li a:hover{
	    color: #FDB45E;
	}

	.fa-angle-down{
	  padding-left: 5px; 
	}

	@-webkit-keyframes fadeInUp {
	  0% {
	    opacity: 0;
	    -webkit-transform: translateY(20px);
	    transform: translateY(20px);
	  }

	  100% {
	    opacity: 1;
	    -webkit-transform: translateY(0);
	    transform: translateY(0);
	  }
	}
`;

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
		  <Main />
	    </BrowserRouter>
	</Provider>,
app);