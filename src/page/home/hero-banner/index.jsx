import React from "react";
import { HERO_BANNER } from "../../../static";
import "./heroBanner.scss";

const HeroBanner = () => {
    let bannerCard = HERO_BANNER?.map((card) => (
        <div
            key={card.id}
            className="banner__card"
            style={{
                backgroundImage: `url(${card.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="banner__card__info">
                <h3>{card.title}</h3>
                <div className="banner__card__price">
                    <p className="banner__card__price-discount">
                        <span>$534,33</span> <span>24% Off</span>
                    </p>
                    <p>${card.price}</p>
                </div>
            </div>
        </div>
    ));
    return (
        <div id="banner">
            <div className="container banner">
                <div className="banner__cards">{bannerCard}</div>
            </div>
        </div>
    );
};

export default HeroBanner;
