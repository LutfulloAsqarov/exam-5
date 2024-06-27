import React from "react";

import "./cart.scss";
import { useSelector } from "react-redux";

const Cart = () => {
    let cartData = useSelector((state) => state.cart.value);
    console.log(cartData);

    return (
        <table>
            {/* <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>UNIT PRICE</th>
                </tr>
            </thead>
            {cartData?.map((cart) => (
                <div>
                    <div>
                        <img src={cart.image} alt="" />
                    </div>
                </div>
            ))} */}
        </table>
    );
};

export default Cart;
