import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
// import authSlice from "./slices/authSlice";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        // auth: authSlice,
        wishlist: wishlistSlice,
        cart: cartSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
