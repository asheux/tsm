import React from 'react';

const AddReviewForm = () => {
  return (
    <div className="add-review-container col-md-12">
      <div className="review-form-content">
        <div className="title">
          <h3>Add your Review</h3>
        </div>
        <form className="review-form" noValidate="novalidate">
          <div className="form-group ratings-body col-md-12">
            <div className="ratings-form-label">Your Rating</div>
              <div className="stars">
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
              </div>
            </div>
            <textarea name="message" placeholder="Review text of product"></textarea>
            <button type="submit" className="auth-btn btn btn-default">
              <span className="glyphicon glyphicon-off"></span> Submit Review
            </button>
          <div className="form-result"></div>
        </form>
      </div>
   </div>
 );
}

export default AddReviewForm;
