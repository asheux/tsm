import React from 'react';

const ratingStars = (numberOfRatings) => {
  const totalStar = 5;
  const starPercentage = (numberOfRatings / totalStar) * 100;
  const starPercentageRounded =
    `${(Math.round(starPercentage / 10) * 10)}%`;
  return {width: `${starPercentageRounded}`};
}

const AllReviews = ({...props}) => {
  const { productReviews } = props;
  return (
    <div className="all-review-container make-scrollable col-md-12"><br />
      <h4>Product Reviews</h4>
      <small>(Scroll for more)</small>
      {productReviews.map(review =>
        <div className="review-block" key={review.created_on}><hr/>
          <div className="row">
            <div className="col-sm-3">
              <div className="review-block-name"><p className="reviewer-name">By @{review.name}</p></div>
              <div className="review-block-date">{review.created_on}</div>
            </div>
            <div className="col-sm-9">
              <div className="stars-outer">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                  <div className="stars-inner" style={ratingStars(review.rating)}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="review-block-description">{review.review}</div>
              </div>
            </div>
          </div>
        )}
      <hr/>
    </div>
  );
};

export default AllReviews;
