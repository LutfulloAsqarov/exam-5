import React, { useEffect } from "react";
import new1 from "../../../assets/news/news1.svg";
import new2 from "../../../assets/news/news2.svg";
import new3 from "../../../assets/news/news3.svg";
import "./news.scss";

const News = () => {
    return (
        <div className="news container">
            <h2 className="section__title">LATEST NEWS</h2>
            <div className="news__cards">
                <div className="news__card" data-aos="fade-right">
                    <div className="news__img">
                        <img src={new1} alt="" />
                    </div>
                    <div className="news__info">
                        <span>01 Jan, 2015</span>
                        <h3 className="news__name">Fashion Industry</h3>
                        <p className="news__desc">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                </div>
                <div
                    className="news__card"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    <div className="news__img">
                        <img src={new2} alt="" />
                    </div>
                    <div className="news__info">
                        <span>01 Jan, 2015</span>
                        <h3 className="news__name">Best Design Tools</h3>
                        <p className="news__desc">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                </div>
                <div
                    className="news__card"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <div className="news__img">
                        <img src={new3} alt="" />
                    </div>
                    <div className="news__info">
                        <span>01 Jan, 2015</span>
                        <h3 className="news__name">HR Community</h3>
                        <p className="news__desc">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
