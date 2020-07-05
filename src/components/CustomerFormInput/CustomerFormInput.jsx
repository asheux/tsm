import React from "react";

const CustomerFormInput = ({ ...props }) => {
    const { type, handleChange, placeholder, name, required, label } = props;
    return (
        <div className="form-group row">
            <label htmlFor="text" className="col-4 col-form-label">
                {label}
            </label>
            <div className="col-8">
                <input
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="form-control"
                    required={required}
                    type={type}
                />
            </div>
        </div>
    );
};

export default CustomerFormInput;
