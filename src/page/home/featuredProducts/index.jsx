import React from "react";
import { FaStar } from "react-icons/fa";

// import { useGetProductsQuery } from "../../context/api/productApi";
import "./featuredProducts.scss";
import { useGetProductsQuery } from "../../../context/api/productApi";

const FeaturedProducts = () => {
    const { data, isLoading, isSuccess } = useGetProductsQuery();
    const featureItem = data?.slice(0, 3).map((el) => (
        <div className="feature__card" key={el.id}>
            <div className="feature__img">
                <img src={el?.image} alt="" />
            </div>
            <div className="feature__info">
                <p className="feature__desc">{el?.title}</p>
                <div className="feature__stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="feature__prices">
                    <h3 className="feature__newPrice">${el?.price}</h3>
                    <h3 className="feature__oldPrice">
                        ${Math.trunc(el?.price * 1.5)}
                    </h3>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="feature container">
            <h3 className="feature__title">FEATURED PRODUCTS</h3>
            <div className="feature__cards">{featureItem}</div>
        </div>
    );
};

export default FeaturedProducts;
