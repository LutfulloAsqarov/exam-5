import React from "react";
import Products from "../../components/products";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wishlist = () => {
    let wishlistData = useSelector((state) => state.wishlist.value);

    return (
        <>
            {wishlistData.length ? (
                <div className="products container">
                    <h1 className="section__title">Wishlist</h1>
                    <div className="products__cards">
                        {wishlistData?.map((product) => (
                            <Products product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        height: "400px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                >
                    <h1>No liked products yet !</h1>
                    <Link
                        to={"/"}
                        style={{
                            padding: "10px",
                            background: "#33a0ff",
                            color: "#fff",
                        }}
                    >
                        Go home
                    </Link>
                </div>
            )}
        </>
    );
};

export default Wishlist;
