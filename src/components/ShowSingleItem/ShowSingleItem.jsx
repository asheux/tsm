import React from 'react';
import * as image_store from '../../utils/imageUrl';
import Footer from '../Footer';
import AddReviewForm from '../AddReviewForm';
import AllReviews from '../AllReviews';

const filterColors = (
  colorAttributes,
  handleColorClick,
  activeColorItem,
  activeColorItemStyle
) => (
  <div className="color-filter">
    {colorAttributes.map(color =>
      <span
        onClick={handleColorClick}
        data-key={color.attribute_value}
        style={activeColorItem === color.attribute_value ? activeColorItemStyle : {}}
        key={color.attribute_value_id}
        className={`color ${color.attribute_value}`}>
      </span>
    )}
  </div>
);

const filterSize = (
  sizeAttributes,
  activeSizeItem,
  handleSizeClick,
  activeSizeItemStyle
) => (
  <div className="size-filter">
    {sizeAttributes.map(size =>
      <span
        style={activeSizeItem === size.attribute_value ? activeSizeItemStyle : {}}
        onClick={handleSizeClick}
        key={size.attribute_value_id}
        className={`size`}>
        {size.attribute_value}
      </span>
    )}
  </div>
);

const renderImage = (productDetails) => (
  <React.Fragment>
    <div className="preview-pic tab-content">
      <div className="tab-pane active" id="pic-1">
        <img alt="black here"
          src={image_store.IMAGE_URL + productDetails.thumbnail}/>
      </div>
    </div>
    <div className="preview-thumbnail-image">
      <ul className="preview-thumbnail nav nav-tabs">
        <li><img alt="black here" src={image_store.IMAGE_URL + productDetails.image} /></li>
        <li><img alt="black here" src={image_store.IMAGE_URL + productDetails.image_2} /></li>
      </ul>
    </div>
  </React.Fragment>
);

const ShowSingleItem = ({...props}) => {
  const {
    productDetails, reviews,
    sizeAttributes, colorAttributes,
    handleSizeClick, handleColorClick,
    activeSizeItem, activeColorItem,
    handleAddToCart, error, loading, message
  } = props;
  const activeSizeItemStyle = {
    background: '#DC143C',
    color: '#ffffff'
  };
  const activeColorItemStyle = {
    border: '5px solid #E6E6FA'
  };
  const response = message || error;
  const resSuccess = 'alert alert-success';
  const resErr = 'alert alert-danger';

  return (
    <div className="">
      <div className="container single-item-container">
    		<div className="card-item">
    			<div className="container-fliud">
    				<div className="wrapper row">
    					<div className="preview col-md-6">
    						{renderImage(productDetails)}
    					</div>
    					<div className="details col-md-6">
    						<h3 className="product-title">{productDetails.name}</h3>
    						<div className="rating">
    							<div className="stars">
                    <i className="far fa-star checked"></i>
                    <i className="far fa-star checked"></i>
                    <i className="far fa-star checked"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
    							</div>
                  <span className="review-no">{reviews.length} reviews</span>
    						</div>
                <div>
                  <h6 className="price">current price: <span>&euro; {productDetails.price}</span></h6>
                </div>
    						<p className="product-description">{productDetails.description}</p>
    						<h6 className="colors">Color</h6>
                {filterColors(
                  colorAttributes, handleColorClick,
                  activeColorItem, activeColorItemStyle
                )}
                <h6 className="colors">Size</h6>
                {filterSize(
                  sizeAttributes, activeSizeItem,
                  handleSizeClick,activeSizeItemStyle
                )}
    						<div className="action">
    							<button
                    onClick={handleAddToCart}
                    className="add-to-cart btn btn-default"
                    type="button">{loading ? 'Adding to cart...' : 'Add to cart'}</button>
    						</div><br />
                {response ? <span className={response === error ? resErr : resSuccess}>{response}</span> : ''}
    					</div>
    				</div>
    			</div>
    		</div><br />
        <div className="row">
          <div className="col-md-6">
            <AllReviews
              productReviews={reviews}
            />
          </div>
          <div className="col-md-6">
            <AddReviewForm />
          </div>
        </div>
    	</div>
      <Footer />
    </div>
  );
}

export default ShowSingleItem;
