import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { FaStar } from "react-icons/fa";
import "./productDetails.scss";

const ProductDetails = () => {
    let { id } = useParams();

    let { data: detail } = useGetProductByIdQuery(id);

    return (
        <div id="details">
            <div className="container details">
                <div className="details__left">
                    <div className="details__left__top">
                        <div className="details__images">
                            <Link>
                                <img src={detail?.image} alt="" />
                            </Link>
                        </div>
                        <div className="details__info">
                            <h2>{detail?.title}</h2>
                            <div className="details__rating">
                                <div>
                                    <FaStar color="#FFC600" />
                                    <FaStar color="#FFC600" />
                                    <FaStar color="#FFC600" />
                                    <FaStar color="#FFC600" />
                                    <FaStar color="#ddd" />
                                </div>
                                <span>0 reviews</span>
                                <Link>Submit a review</Link>
                            </div>
                            <div className="details__price">
                                <p>${detail?.price}</p>
                                <p className="details__price-discount">
                                    <span>$534,33</span> <span>24% Off</span>
                                </p>
                            </div>
                            <div className="details__category">
                                <p>
                                    <span> Availability: </span>
                                    <span>In stock</span>
                                </p>
                                <p>
                                    <span>Category:</span>
                                    <span>Accessories</span>
                                </p>
                                <p>Free shipping</p>
                            </div>
                            <div className="details__color">
                                <p>Select Color: </p>
                                <div className="details__color__items">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="details__size">
                                <p>Size:</p>
                                <select name="" id="">
                                    <option value="">XS</option>
                                    <option value="">XL</option>
                                    <option value="">M</option>
                                    <option value="">X</option>
                                </select>
                            </div>
                            <div className="details__btns">
                                <div className="details__btns__counter">
                                    <button>-</button>
                                    <span>0</span>
                                    <button>+</button>
                                </div>
                                <div className="details__btns__add">
                                    <button>Add To Cart</button>
                                    <button>Line</button>
                                </div>
                            </div>
                            <div className="details__share">
                                <button>Share on Facebook</button>
                                <button>Share on Twitter</button>
                            </div>
                        </div>
                    </div>
                    <div className="details__left__bot">
                        <div className="details__left__bot__up-tab">
                            <button>Product Information</button>
                            <button>Reviews</button>
                            <button>Another tab</button>
                        </div>
                        <p>
                            air max are always very comfortable fit, clean and
                            just perfect in every way. just the box was too
                            small and scrunched the sneakers up a little bit,
                            not sure if the box was always this small but the
                            90s are and will always be one of my favorites.{" "}
                            <br />
                            <br /> air max are always very comfortable fit,
                            clean and just perfect in every way. just the box
                            was too small and scrunched the sneakers up a little
                            bit, not sure if the box was always this small but
                            the 90s are and will always be one of my favorites.
                        </p>
                    </div>
                </div>
                <div className="details__right">
                    <h2>Best Seller</h2>
                    <div className="details__card">
                        <div className="details__card__img">
                            <img src={detail?.image} alt="" />
                        </div>
                        <div className="details__card__info">
                            <div className="details__card__rate">
                                <FaStar color="#FFC600" />
                                <FaStar color="#FFC600" />
                                <FaStar color="#FFC600" />
                                <FaStar color="#FFC600" />
                                <FaStar color="#ddd" />
                            </div>
                            <div className="details__card__price">
                                <p>${detail?.price}</p>
                                <p className="details__card__price-discount">
                                    $534,33
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
