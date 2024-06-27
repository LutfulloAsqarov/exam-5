import React, { useState } from "react";
import Hero from "./hero";
import HeroBanner from "./hero-banner";
import {
    useGetCategoriesQuery,
    useGetParamsProductsQuery,
} from "../../context/api/productApi";
import Products from "../../components/products";
import News from "./news";
import Shop from "./shop";
import "./home.scss";
import FeaturedProducts from "./featuredProducts";
import Pagination from "@mui/material/Pagination";
import Service from "./service";
import { Box } from "@mui/material";

const Home = () => {
    const [categoryValue, setCategoryValue] = useState("all");
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(+sessionStorage.getItem("page") || 1);
    // const [perPageCount, setPerPageCount] = useState(
    //     +localStorage.getItem("perPageCount") || 4
    // );

    let category = categoryValue === "all" ? "" : "/category/" + categoryValue;
    let { data: products } = useGetParamsProductsQuery({
        category,
        limit,
        page: page,
    });
    // console.log(products);

    let { data: categories } = useGetCategoriesQuery();
    // console.log(products?.length);

    // const totalCount = Math.ceil(products?.length / perPageCount) || 0;

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
    // const handleChangeCount = (e) => {
    //     setPerPageCount(e.target.value);
    //     localStorage.setItem("perPageCount", e.target.value);
    // };

    const handleChange = (_, value) => {
        setPage(value);
        sessionStorage.setItem("page", value);
    };

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
                <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                    py={"20px"}
                >
                    <Pagination
                        count={10}
                        color="secondary"
                        onChange={handleChange}
                        page={page}
                    ></Pagination>
                </Box>
            </section>
            <Shop />
            <Service />
            <News />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
