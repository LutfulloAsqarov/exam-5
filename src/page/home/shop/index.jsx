import React from "react";
import img from "../../../assets/shop.svg";

import "./shop.scss";

function Shop() {
    return (
        <section className="shop container">
            <div className="shop__left">
                <h2 className="shop__left__title">
                    Adidas Men Running Sneakers
                </h2>
                <p className="shop__left__text">
                    Performance and design. Taken right to the edge.
                </p>
                <button className="shop__left__btn">SHOP NOW</button>
            </div>
            <div className="shop__right">
                <img src={img} alt="" />
            </div>
        </section>
    );
}

export default Shop;
