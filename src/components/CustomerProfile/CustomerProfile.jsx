import React from "react";
import CustomerFormInput from "../CustomerFormInput";

const CustomerProfile = ({ ...props }) => {
    const {
        handleChange,
        handleSubmit,
        message,
        error,
        fetchedCustomer
    } = props;
    const { data } = fetchedCustomer;
    const response = message || error;
    const resSuccess = "alert alert-success";
    const resErr = "alert alert-danger";

    return (
        <div className="container shipping-container">
            <div className="row shipping">
                <div className="col-md-12">
                    {response ? (
                        <span
                            className={response === error ? resErr : resSuccess}
                        >
                            {response}
                        </span>
                    ) : (
                        ""
                    )}
                    <br />
                    <br />
                    <h3 className="header-address">User Profile</h3>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <CustomerFormInput
                            name="name"
                            label="Customer Name*"
                            handleChange={handleChange}
                            placeholder={data.name}
                            className="form-control"
                            required="required"
                            type="text"
                        />
                        <CustomerFormInput
                            name="email"
                            label="Customer Email*"
                            handleChange={handleChange}
                            placeholder={data.email}
                            className="form-control"
                            required="required"
                            type="text"
                        />
                        <CustomerFormInput
                            name="day_phone"
                            label="Customer Day Phone"
                            handleChange={handleChange}
                            placeholder={data.day_phone}
                            className="form-control"
                            type="phone"
                        />
                        <CustomerFormInput
                            name="eve_phone"
                            label="Customer Eve Phone"
                            handleChange={handleChange}
                            placeholder={data.eve_phone}
                            className="form-control"
                            type="phone"
                        />
                        <CustomerFormInput
                            name="mob_phone"
                            label="Customer Mobile Phone"
                            handleChange={handleChange}
                            placeholder={data.mob_phone}
                            className="form-control"
                            type="phone"
                        />
                        <CustomerFormInput
                            name="password"
                            label="New Password"
                            handleChange={handleChange}
                            placeholder="New Password"
                            className="form-control"
                            type="password"
                        />
                        <CustomerFormInput
                            name="confirmPass"
                            label="Confirm New Password"
                            handleChange={handleChange}
                            placeholder="Confirm New Password"
                            className="form-control"
                            type="password"
                        />
                        <div className="form-group row">
                            <div className="offset-4 col-8">
                                <button
                                    name="submit"
                                    type="submit"
                                    className="add-to-cart btn btn-default"
                                >
                                    Update My Profile
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;
