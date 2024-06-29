import React from "react";
import { FaStar } from "react-icons/fa";

import { useGetParamsProductsQuery } from "../../../context/api/productApi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./featuredProducts.scss";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const FeaturedProducts = () => {
    const { data, isLoading, isSuccess } = useGetParamsProductsQuery({
        category: "/",
    });
    const featureItem = data?.slice(0, 20).map((el) => (
        <SwiperSlide key={el.id}>
            <div className="feature__card">
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
        </SwiperSlide>
    ));

    return (
        <div className="feature container">
            <h3 className="feature__title">FEATURED PRODUCTS</h3>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="feature__cards"
            >
                {featureItem}
            </Swiper>
            {/* <div className="feature__cards"></div> */}
        </div>
    );
};

export default FeaturedProducts;
