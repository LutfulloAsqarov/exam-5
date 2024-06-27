import React from "react";
import refund from "../../../assets/service/refund.svg";
import shipping from "../../../assets/service/shipping.svg";
import support from "../../../assets/service/support.svg";
import "./service.scss";

const Service = () => {
    return (
        <section id="service">
            <div className="container service">
                <div className="service__cards">
                    <div className="service__card">
                        <div className="service__card__img">
                            <img src={refund} alt="" />
                        </div>
                        <div className="service__card__info">
                            <h3>FREE SHIPPING</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="service__card">
                        <div className="service__card__img">
                            <img src={shipping} alt="" />
                        </div>
                        <div className="service__card__info">
                            <h3>100% REFUND</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="service__card">
                        <div className="service__card__img">
                            <img src={support} alt="" />
                        </div>
                        <div className="service__card__info">
                            <h3>SUPPORT 24/7</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
