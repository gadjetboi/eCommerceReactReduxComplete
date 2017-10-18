import React from 'react';
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form';

class CashOnDeliveryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  submit(values) {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
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

    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.submit)}>
          
          <Field
            name="orderComment"
            type="text"
            component={renderField}
            label="Add comment about your order (optional)"
          />

          <div>
            <button type="submit" disabled={pristine || submitting}>Place order</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </form>

      </div>

    );
  }
}
// <Redirect to="/orderDetails" push />

CashOnDeliveryForm = reduxForm({
  form: 'cashOnDeliveryForm'
})(CashOnDeliveryForm);

export default CashOnDeliveryForm;