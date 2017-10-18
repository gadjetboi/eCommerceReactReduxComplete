import React from "react";

import CashOnDeliveryForm from './Payment/CashOnDeliveryForm';
import CreditCardForm from './Payment/CreditCardForm';

export default class PaymentForm extends React.Component {
  
  render() {
    return (
      <div>
        <CashOnDeliveryForm />
        <CreditCardForm />
      </div>
    )
  }
}