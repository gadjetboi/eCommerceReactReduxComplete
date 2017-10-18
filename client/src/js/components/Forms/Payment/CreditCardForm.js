import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import validator from 'validator';

const validate = values => {
  const errors = {}
  
  if (!values.creditcardNumber) {
    errors.creditcardNumber = "Required";
  }
  if(!values.creditcardName) {
    errors.creditcardName = "Required";
  }
  if (!values.expirationMonth) {
    errors.expirationMonth = 'Required';
  }
  if (!values.expirationYear) {
    errors.expirationYear = 'Required';
  }
  if (!values.verificationCode) {
    errors.verificationCode = 'Required';
  }
  return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' }
    }
  })
}

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  submit(values) {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  }

  render() {

    const renderField = ({
      input,
      label,
      type,
      meta: { asyncValidating, touched, error }
    }) => (
      <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )

    const { error, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name="creditcardNumber"
          type="text"
          component={renderField}
          label="Credit Card Number"
        />  
        <Field
          name="creditcardName"
          type="text"
          component={renderField}
          label="Name on Credit Card"
        />
        <Field
          name="expirationMonth"
          type="text"
          component={renderField}
          label="Expiration Month"
        />
        <Field
          name="expirationYear"
          type="text"
          component={renderField}
          label="Expiration Year"
        />
        <Field
          name="verificationCode"
          type="text"
          component={renderField}
          label="Verification Code"
        />

        <div>
          <button type="submit" disabled={pristine || submitting}>Place order</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

CreditCardForm = reduxForm({
  form: 'creditCardForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['creditcardNumber']
})(CreditCardForm);

export default CreditCardForm;