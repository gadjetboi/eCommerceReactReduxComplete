import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './Home';
import Product from './Product';
import Cart from "./Cart";
import About from './About';
import Checkout from './Checkout';
import OrderDetails from './OrderDetails';

import { Switch, Route } from 'react-router';

import { history } from '../store';

export default class Layout extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Header history={history}/>
			      <Switch>
		         	<Route exact={true} path="/" component={Home} />
		        	<Route path='/product/:categoryId' component={Product} />	
					<Route path='/cart' component={Cart} />		
					<Route path='/about' component={About}/>
					<Route path='/checkout' component={Checkout}/>
					<Route path='/orderDetails' component={OrderDetails}/>
		         </Switch>
		        <Footer />
		    </div>
		)
	}
}