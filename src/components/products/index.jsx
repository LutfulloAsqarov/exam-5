import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import "./products.scss";

const Products = ({ product }) => {
    let rating = product.rating.rate;

    function getRating(id) {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<FaStar key={i} color="gold" />);
        }
        if (rating % 1 > 0.4) {
            res.push(<FaStarHalfAlt key={id} color="gold" />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<FaRegStar key={i} color="gold" />);
        }
        return res;
    }

    return (
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
                <h3 className="products__card__title" title={product.title}>
                    {product.title}
                </h3>
                <div className="products__card__rating">
                    <div>{getRating(product.title)}</div>
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
        // <div></div>
    );
};

export default Products;
