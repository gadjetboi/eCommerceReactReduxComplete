import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

export default class HeaderTop extends React.Component {

	render() {
		const HeaderTop = styled.div`
			background: none repeat scroll 0 0 #F0F0E9;
		`;

		const ContactInfo = styled.div`
			ul li:first-child {
				margin-left: -15px;
			}

			ul li a{
			  font-size: 12px;
			  color: #696763;
			  font-family: 'Roboto', sans-serif;
			}

			ul li a:hover{
				background:inherit;
			}
		`;

		const SocialIcons = styled.div`
			ul li a {
			  border: 0 none;
			  border-radius: 0;
			  color: #696763;
			  padding:0px;
			}

			ul li{
				display:inline-block;
			}

			ul li a i {
			  padding: 11px 15px;
			   transition: all 0.9s ease 0s;
			  -moz-transition: all 0.9s ease 0s;
			  -webkit-transition: all 0.9s ease 0s;
			  -o-transition: all 0.9s ease 0s;
			}

			ul li a i:hover{
			  color: #fff;
			   transition: all 0.9s ease 0s;
			  -moz-transition: all 0.9s ease 0s;
			  -webkit-transition: all 0.9s ease 0s;
			  -o-transition: all 0.9s ease 0s;
			}
		`;

		return (
			<HeaderTop>
				<Container>
			        <Row>
			          <Col sm="6">
			          	<ContactInfo>
							<ul class="nav nav-pills">
								<li><a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> info@domain.com</a></li>
							</ul>
						</ContactInfo>
			          </Col>
			          <Col sm="6">
			          	<SocialIcons class="pull-right">
							<ul class="nav navbar-nav">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</SocialIcons>
			          </Col>
			        </Row>
			    </Container>
			</HeaderTop>
		)
	}
}

