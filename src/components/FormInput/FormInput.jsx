import React from 'react';

const FormInput = ({...props}) => {
  const {
    type, name, value,
    placeholder, onChange,
    iconClass, errorMessage
  } = props;
  return (
    <React.Fragment>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className={iconClass}></i></span>
        </div>
        <input
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
