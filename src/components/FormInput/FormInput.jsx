import React from 'react';

const FormInput = ({...props}) => {
  const {
    type, name, value,
    placeholder, onChange,
    errorMessage, required
  } = props;
  return (
    <React.Fragment>
      <div className="input-group">
        <input
          required={required}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder} />
      </div>
      {errorMessage
        ?
        <div className="alert-danger">
          <small>{errorMessage}</small>
        </div>
        : ''
      }
    </React.Fragment>
  )
}

export default FormInput;
