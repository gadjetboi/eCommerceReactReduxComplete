import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import validator from 'validator';

const validate = values => {
  const errors = {}
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if(values.email) {
    if(!validator.isEmail(values.email)) {
      errors.email = "Invalid Email";
    }
  }
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if(!values.reenterPassword) {
    errors.reenterPassword = 'Password must match';
  }
  if(values.reenterPassword) {
    if(!validator.equals(values.password, values.reenterPassword)) {
      errors.reenterPassword = 'Password must match';
    }
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

function submit(values) {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}


class RegistrationForm extends React.Component {
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
        name="fullName"
        component={renderField}
        type="text"
        label="Your name"
      />  

      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
      />  
      
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />

      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />

      <Field
        name="reenterPassword"
        type="password"
        component={renderField}
        label="Re-enter password"
      />
      
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
  }
}

RegistrationForm = reduxForm({
  form: 'registrationForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['username']
})(RegistrationForm);

export default RegistrationForm;

