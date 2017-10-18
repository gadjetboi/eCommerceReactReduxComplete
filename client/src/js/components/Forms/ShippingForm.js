import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import validator from 'validator';

const validate = values => {
  const errors = {}
  
  if (!values.address) {
    errors.address = "Required";
  }
  if(!values.city) {
    errors.city = "Required";
  }
  if (!values.state) {
    errors.state = 'Required';
  }
  if (!values.country) {
    errors.country = 'Required';
  }
  if (!values.postalCode) {
    errors.postalCode = 'Required';
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

class ShippingForm extends React.Component {
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
          name="address"
          type="text"
          component={renderField}
          label="Address"
        />  
        <Field
          name="address2"
          type="text"
          component={renderField}
          label="Address 2"
        />
        <Field
          name="city"
          type="text"
          component={renderField}
          label="City"
        />
        <Field
          name="state"
          type="text"
          component={renderField}
          label="State"
        />
        <Field
          name="country"
          type="text"
          component={renderField}
          label="Country"
        />
        <Field
          name="postalCode"
          type="text"
          component={renderField}
          label="Postal Code"
        />

        <div>
          <button type="submit" disabled={pristine || submitting}>Next</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

ShippingForm = reduxForm({
  form: 'shippingForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['postalCode']
})(ShippingForm);

export default ShippingForm;