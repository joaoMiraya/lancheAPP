import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        let cartItemsString = JSON.stringify(cartItems);
        localStorage.setItem('requestToCart', cartItemsString);
    }, [cartItems]);

  
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );

};
