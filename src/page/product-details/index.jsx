import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";

const ProductDetails = () => {
    let { id } = useParams();

    let { data: detail } = useGetProductByIdQuery(id);

    return (
        <div id="details">
            <div className="container details">
                <div className="details__right">
                    <div className="details__right__top">
                        <div className="details__images">
                            <Link>
                                <img src={detail.image} alt="" />
                            </Link>
                        </div>
                        <div className="details__info">
                            <h2>{detail.title}</h2>
                            <div className="detail__price">
                                <p>${product.price}</p>
                                <p className="detail__price-discount">
                                    <span>$534,33</span> <span>24% Off</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="details__right__bot"></div>
                </div>
                <div className="details__left"></div>
            </div>
        </div>
    );
};

export default ProductDetails;
