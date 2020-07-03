import React from "react";

const DisplayCard = ({ ...props }) => {
    const {
        image,
        filterId,
        title,
        discounted,
        price,
        onClick,
        description,
        mykey
    } = props;
    return (
        <div className="card-div col-md-3">
            <div
                data-key={mykey}
                className="card"
                onClick={onClick}
                onKeyPress={onClick}
                role="button"
                id={filterId}
                tabIndex="0"
            >
                <div data-key={mykey} className="card-image">
                    <img data-key={mykey} src={image} alt="black coffee" />
                </div>
                <div data-key={mykey} className="card-body">
                    <h4 data-key={mykey}>
                        <b data-key={mykey}>{title}</b>
                    </h4>
                    <small data-key={mykey}>{description}</small>
                    {discounted === "0.00" ? (
                        <p data-key={mykey} className="price">
                            &euro; {price}
                        </p>
                    ) : (
                        <p data-key={mykey} className="price">
                            <small>&euro; {discounted}</small>
                            <span data-key={mykey} className="price">
                                <strike>&euro; {price}</strike>
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;
