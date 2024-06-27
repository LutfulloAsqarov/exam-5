import React, { useState } from "react";
import Hero from "./hero";
import HeroBanner from "./hero-banner";
import {
    useGetProductsCategoriesQuery,
    useGetProductsCategoryQuery,
    useGetProductsQuery,
} from "../../context/api/productApi";
import Products from "../../components/products";
import News from "./news";
import Shop from "./shop";
import "./home.scss";
import FeaturedProducts from "./featuredProducts";
import Service from "./service";

const Home = () => {
    const [categoryValue, setCategoryValue] = useState("all");

    let category = categoryValue === "all" ? "" : `/category/${categoryValue}`;
    let { data: products } = useGetProductsCategoryQuery({ category });
    let { data: categories } = useGetProductsCategoriesQuery();

    // let productsCards = products?.map((el) => el);
    let productCategories = categories?.map((category) => (
        <li key={category} className="categories__item">
            <data
                value={category}
                onClick={(e) => setCategoryValue(e.target.value)}
                className={`${categoryValue === category ? "active" : ""}`}
            >
                {category}
            </data>
        </li>
    ));
    return (
        <div>
            <Hero />
            <HeroBanner />
            <section id="products">
                <div className="container products">
                    <h2 className="section__title">BEST SELLER</h2>
                    <div className="categories">
                        <ul className="categories__list">
                            <li className="categories__item" key={"all"}>
                                <data
                                    value="all"
                                    onClick={(e) =>
                                        setCategoryValue(e.target.value)
                                    }
                                    className={`${
                                        categoryValue === "all" ? "active" : ""
                                    }`}
                                >
                                    all
                                </data>
                            </li>
                            {productCategories}
                        </ul>
                    </div>
                    <div className="products__cards">
                        {products?.map((product) => (
                            <Products product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </section>
            <Shop />
            <Service />
            <News />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
