import React from "react";

const AddressFormInput = ({ ...props }) => {
    const { type, name, required, label, placeholder, handleChange } = props;
    return (
        <div className="col-xs-6 col-sm-6 col-md-6">
            <label className="control-label" htmlFor="firstName">
                {label}
            </label>
            <div className="form-group">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    onChange={handleChange}
                    className="form-control input-sm"
                />
            </div>
        </div>
    );
};

export default AddressFormInput;
