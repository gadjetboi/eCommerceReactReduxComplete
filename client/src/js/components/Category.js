import React from "react";
import Cart from '../components/Cart';
import ProductItem from '../components/ProductItem';

import { Link } from 'react-router-dom';

export default class Category extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const categories = this.props.categories;

		const categoryList = categories.map((category, index) => {
			return (
				<li key={index}><Link to={`/product/${category._id}`}>{category.title}</Link></li>
			)
		});

		return ( 
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <Link class="navbar-brand"  to="/">
			      	<div id="logo">LOGO</div>
				  </Link>
			    </div>
			    <ul class="nav navbar-nav">
			      { categoryList }
			      <li><Link to="/cart">View Cart</Link></li>
			      <li><Link to="/about">About</Link></li>
			    </ul>
			  </div>
			</nav>
		)
	}
}