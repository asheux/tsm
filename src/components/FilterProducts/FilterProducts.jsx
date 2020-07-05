import React from "react";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import * as image_store from "../../utils/imageUrl";
import DisplayCard from "../DisplayCard";

const mapData = (itemDetails, handleCardClick) =>
    itemDetails.map(details => (
        <DisplayCard
            key={details.id}
            mykey={details.id}
            title={details.title}
            image={image_store.IMAGE_URL + details.thumbnail}
            price={details.price}
            discounted={details.discountedPrice}
            onClick={handleCardClick}
            filterId={details.title}
            description={details.description}
        />
    ));

const FilterCategory = ({ ...props }) => {
    const {
        itemDetails,
        handlePageChange,
        total,
        pageSizeOptions,
        handleShowSizeChange,
        handleCardClick
    } = props;

    return (
        <React.Fragment>
            <main role="main" className="col-md-10">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page_title text-center mb-4">
                            <h1>our items</h1>
                            <div className="single_line"></div>
                        </div>
                    </div>
                </div>
                <div className="tab-content col-lg-12" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="breakfast"
                        role="tabpanel"
                        aria-labelledby="breakfast-tab"
                    >
                        <div className="row">
                            {mapData(itemDetails, handleCardClick)}
                        </div>
                    </div>
                    <div className="text-center">
                        {itemDetails.length === 0 ? (
                            "No product found"
                        ) : (
                            <Pagination
                                showSizeChanger
                                showQuickJumper
                                defaultCurrent={1}
                                defaultPageSize={20}
                                pageSizeOptions={pageSizeOptions}
                                onShowSizeChange={handleShowSizeChange}
                                onChange={handlePageChange}
                                total={total}
                            />
                        )}
                    </div>
                    <br />
                    <br />
                </div>
            </main>
        </React.Fragment>
    );
};

export default FilterCategory;
