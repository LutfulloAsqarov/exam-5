import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
// import Hero from "./page/home/hero";
import Home from "./page/home";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./page/wishlist";
import Cart from "./page/cart";
import ProductDetails from "./page/product-details";
import "aos/dist/aos.css";
import Aos from "aos";
import Contact from "./page/contact";
import Login from "./page/login";
import Auth from "./page/auth";
import Admin from "./page/admin";

function App() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/" element={<Auth />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
