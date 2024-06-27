import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

import "./products.scss";
import { toggleHeart } from "../../context/slice/wishlistSlice";
import { addToCart } from "../../context/slice/cartSlice";
// import wishlistSlice from "../../context/slice/wishlistSlice";

const Products = ({ product }) => {
    let rating = product.rating.rate;
    let dispatch = useDispatch();

    let wishlistData = useSelector((state) => state.wishlist.value);
    let cartData = useSelector((state) => state.cart.value);

    function getRating() {
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
                    <button onClick={() => dispatch(addToCart(product))}>
                        <FaShoppingCart />
                    </button>
                    <button onClick={() => dispatch(toggleHeart(product))}>
                        {wishlistData.some((el) => el.id === product.id) ? (
                            <FaHeart style={{ color: "crimson" }} />
                        ) : (
                            <FaRegHeart />
                        )}
                    </button>
                </div>
            </div>
            <div className="products__card__info">
                <h3 className="products__card__title" title={product.title}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
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
