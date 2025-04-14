import { createContext, useCallback, useEffect, useState } from "react";
import { CartContext } from "./AllContext";

// export const CartContext = createContext('');

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })
    
    const addToCart = useCallback((product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }, [])

    const removeFromCart = useCallback((productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart updated:', cart);
    }, [cart]);

    const updateQuantity = useCallback((productId, quantity) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === productId) {
                    const newQuantity = item.quantity + quantity;
                    return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
                }
                return item;
            });
        });
    },[])

    const clearCart = useCallback(() => {
        setCart([]);
    }, [])

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
