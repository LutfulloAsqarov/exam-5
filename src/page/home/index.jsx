import React from "react";
import Hero from "./hero";
import HeroBanner from "./hero-banner";
import {
    useGetProductsCategoriesQuery,
    useGetProductsQuery,
} from "../../context/api/productApi";
import Products from "../../components/products";

const Home = () => {
    let { data: products } = useGetProductsQuery({ limit: 8 });
    let { data: categories } = useGetProductsCategoriesQuery();
    let productsCards = products?.map((el) => el);
    // console.log(productsCards);
    return (
        <div>
            <Hero />
            <HeroBanner />
            <section id="products">
                <div className="container products">
                    <h2 className="section__title">BEST SELLER</h2>
                    <div className="products__category"></div>
                    <div className="products__cards">
                        {productsCards?.map(
                            (product) => (
                                <Products product={product} key={product.id} />
                            )
                            // console.log(product)
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
