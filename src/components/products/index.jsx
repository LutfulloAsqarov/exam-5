import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import "./products.scss";

const Products = ({ data }) => {
    // console.log(data);
    return (
        <div className="products__cards">
            {data?.map((product) => (
                <div key={product.id} className="products__card">
                    <div className="products__card__img">
                        <Link>
                            <img src={product.image} alt="" />
                        </Link>
                        <div className="products__card__btns">
                            <button>
                                <FaShoppingCart />
                            </button>
                            <button>
                                <FaRegHeart />
                            </button>
                        </div>
                    </div>
                    <div className="products__card__info">
                        <h3
                            className="products__card__title"
                            title={product.title}
                        >
                            {product.title}
                        </h3>
                        <div className="products__card__rating">
                            {/* <img src={star} alt="" /> */}
                            <div>
                                <FaStar color="gold" />
                                <FaStar color="gold" />
                                <FaStar color="gold" />
                                <FaStar color="gold" />
                                <FaStar color="gold" />
                            </div>
                            <p>{product.rating.rate}</p>
                        </div>
                        <div className="products__card__price">
                            <p>${product.price}</p>
                            <p className="products__card__price-discount">
                                <span>$534,33</span> <span>24% Off</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;