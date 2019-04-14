import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../static/images-shirt2.png';
import Footer from '../Footer';

const ShowSingleItem = () => {

  return (
    <div className="">
      <div className="container single-item-container">
    		<div className="card-item">
    			<div className="container-fliud">
    				<div className="wrapper row">
    					<div className="preview col-md-6">

    						<div className="preview-pic tab-content">
    						  <div className="tab-pane active" id="pic-1"><img alt="black here" src={image} /></div>
    						  <div className="tab-pane" id="pic-2"><img alt="black here" src={image} /></div>
    						  <div className="tab-pane" id="pic-3"><img alt="black here" src={image} /></div>
    						  <div className="tab-pane" id="pic-4"><img alt="black here" src={image} /></div>
    						  <div className="tab-pane" id="pic-5"><img alt="black here" src={image} /></div>
    						</div>
    						<ul className="preview-thumbnail nav nav-tabs">
    						  <li className="active"><Link to="!#" data-target="#pic-1" data-toggle="tab"><img alt="black here" src={image} /></Link></li>
    						  <li><Link to="!#" data-target="#pic-2" data-toggle="tab"><img alt="black here" src={image} /></Link></li>
    						  <li><Link to="!#" data-target="#pic-3" data-toggle="tab"><img alt="black here" src={image} /></Link></li>
    						  <li><Link to="!#" data-target="#pic-4" data-toggle="tab"><img alt="black here" src={image} /></Link></li>
    						  <li><Link to="!#" data-target="#pic-5" data-toggle="tab"><img alt="black here" src={image} /></Link></li>
    						</ul>

    					</div>
    					<div className="details col-md-6">
    						<h3 className="product-title">men's shoes fashion</h3>
    						<div className="rating">
    							<div className="stars">
    								<span className="fa fa-star checked"></span>
    								<span className="fa fa-star checked"></span>
    								<span className="fa fa-star checked"></span>
    								<span className="fa fa-star"></span>
    								<span className="fa fa-star"></span>
    							</div>
    						</div>
                <div>
                  <h6 className="price">current price: <span>&euro; 18.50</span></h6>
                </div>
    						<p className="product-description">Suspendiss quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
    						<h6 className="colors">colors</h6>
                <div class="color-filter">
                  <span className="color orange"></span>
                  <span className="color green"></span>
                  <span className="color pink"></span>
                  <span className="color purple"></span>
                  <span className="color red"></span>
                  <span className="color blue"></span>
                  <span className="color white"></span>
                </div>
                <h6 className="sizes">sizes</h6>
                <div className="size-filter">
                  <span className="size active" data-toggle="tooltip" title="small">S</span>
                  <span className="size" data-toggle="tooltip" title="medium">M</span>
                  <span className="size" data-toggle="tooltip" title="large">L</span>
                  <span className="size" data-toggle="tooltip" title="xtra large">XL</span>
                  <span className="size xtra-xtra-large" data-toggle="tooltip" title="xtra xtra large">XXL</span>
                </div>
    						<div className="action">
    							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
      <Footer />
    </div>
  );
}

export default ShowSingleItem;
