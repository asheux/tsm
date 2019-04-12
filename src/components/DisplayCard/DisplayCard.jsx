import React from 'react';

const DisplayCard = ({...props}) => {
  const {
    image,
    filterId,
    title, price,
    onClick,
    description
  } = props;
  return (
    <div className="card-div col-md-3">
      <div
        className="card"
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        id={filterId}
        tabIndex="0"
      >
        <div className="card-image">
          <img src={image} alt="black coffee" />
        </div>
        <div className="card-body">
          <h4><b>{title}</b></h4>
          <small>{description}</small>
          <p className="price">&euro; {price}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayCard;
