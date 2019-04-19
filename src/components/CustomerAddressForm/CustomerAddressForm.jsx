import React from 'react';
import AddressFormInput from '../AddressFormInput';

const CustomerAddressForm = ({...props}) => {
  const {
    handleChange,
    fetchedCustomer,
    handleShippingType,
    shippingTypes,
    taxes,
    message,
    error,
    handleTaxChange,
    regions } = props;

  const response = message || error;
  const resSuccess = 'alert alert-success';
  const resErr = 'alert alert-danger';

  return (
    <React.Fragment>
        {response ? <span className={response === error ? resErr : resSuccess}>{response}</span> : ''}
        <br /><br />
        <h3 className="header-address">Shipping Address</h3>
        <hr />
        <div className="row">
          <AddressFormInput
            handleChange={handleChange}
            type="text"
            placeholder={fetchedCustomer.address_1}
            name="address_1"
            required="required"
            label="Address 1 *" />
          <AddressFormInput
            handleChange={handleChange}
            type="text"
            placeholder={fetchedCustomer.address_2}
            name="address_2"
            label="Address 2" />
        </div>
        <div className="row">
          <AddressFormInput
            handleChange={handleChange}
            type="text"
            placeholder={fetchedCustomer.city}
            required="required"
            name="city"
            label="City *" />
          <AddressFormInput
            handleChange={handleChange}
            type="text"
            placeholder={fetchedCustomer.region}
            required="required"
            name="region"
            label="Region *" />
        </div>
        <div className="row">
          <AddressFormInput
            handleChange={handleChange}
             type="text"
             placeholder={fetchedCustomer.country}
             name="country"
             required="required"
             label="Country *" />
          <AddressFormInput
            handleChange={handleChange}
            type="text"
            placeholder={fetchedCustomer.postal_code}
            name="postal_code"
            label="Postal code *" />
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <label className="control-label" htmlFor="firstName">Shipping Regions *</label>
            <select
              className="form-control"
              name="shipping_region_id"
              onChange={handleChange}
              >
              {regions.map(region =>
                <option key={region.shipping_region_id}
                value={region.shipping_region_id}>{region.shipping_region}</option>
              )}
            </select>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <label className="control-label" htmlFor="firstName">Shipping Type *</label>
            <select
              className="form-control"
              onChange={handleShippingType}
              >
              <option value="">Please Select</option>
              {shippingTypes.map(type =>
                <option key={type.shipping_id} value={type.shipping_id}>{type.shipping_type}</option>
              )}
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <label className="control-label" htmlFor="firstName">Taxes Type*</label>
            <select
              className="form-control"
              name="tax_id"
              onChange={handleTaxChange}
              >
              <option value="">Please Select</option>
              {taxes.map(tax =>
                <option key={tax.tax_id} value={tax.tax_id}>{tax.tax_type}</option>
              )}
            </select>
          </div>
        </div>
      </React.Fragment>
  );
}

export default CustomerAddressForm;
