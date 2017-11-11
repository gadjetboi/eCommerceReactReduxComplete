import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

export default class HeaderMiddle extends React.Component {

	render() {
		
		return (
			<div class="header-middle">
				<Container>
					<Row>
						<Col sm="4">
							<div class="logo pull-left">
								<a href="index.html"><img src="img/home/logo.png" alt="" /></a>
							</div>
							<div class="btn-group pull-right">
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
										USA
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="#">Canada</a></li>
										<li><a href="#">UK</a></li>
									</ul>
								</div>
								
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
										DOLLAR
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="#">Canadian Dollar</a></li>
										<li><a href="#">Pound</a></li>
									</ul>
								</div>
							</div>
						</Col>
						<Col sm="8">
							<div class="shop-menu pull-right">
								<ul class="nav navbar-nav">
									<li><a href="#"><i class="fa fa-user"></i> Account</a></li>
									<li><a href="#"><i class="fa fa-star"></i> Wishlist</a></li>
									<li><a href="checkout.html"><i class="fa fa-crosshairs"></i> Checkout</a></li>
									<li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Cart</a></li>
									<li><a href="login.html"><i class="fa fa-lock"></i> Login</a></li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

