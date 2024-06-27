import { useState } from "react";
import "./App.css";
import Header from "./components/header";
// import Hero from "./page/home/hero";
import Home from "./page/home";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./page/wishlist";
import Cart from "./page/cart";
import ProductDetails from "./page/product-details";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
