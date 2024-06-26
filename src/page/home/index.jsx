import React from "react";
import Hero from "./hero";
import HeroBanner from "./hero-banner";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products";

const Home = () => {
    let { data: products } = useGetProductsQuery({ limit: 10 });
    return (
        <div>
            <Hero />
            <HeroBanner />
            <section id="products">
                <div className="container products">
                    <Products data={products} />
                </div>
            </section>
        </div>
    );
};

export default Home;
