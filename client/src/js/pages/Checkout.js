import React from "react";

import { Field, reduxForm, SubmissionError } from 'redux-form';
import validator from 'validator';
import SignInForm from '../components/Forms/SignInForm';
import RegistrationForm from '../components/Forms/RegistrationForm';
import ShippingForm from '../components/Forms/ShippingForm';
import PaymentForm from '../components/Forms/PaymentForm';

export default class Checkout extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<h1>Checkout</h1>
				<div>
			        <h2>Sign In</h2>
			        <SignInForm />
			        <h2>Create account</h2>
			        <RegistrationForm />
			        <h2>Shipping Information</h2>
			        <ShippingForm />
			        <h2>Payment Information</h2>
			        <PaymentForm />
			    </div>
			</div>
		)
	}
}