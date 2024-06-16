import React, { createContext, useState } from 'react';

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
        updatedProduct.subtotal = updatedProduct.quantity * product.price;
        return prevCart.map(item =>
          item.id === product.id ? updatedProduct : item
        );
      } else {
        const newProduct = { ...product, quantity: 1 };
        newProduct.subtotal = newProduct.quantity * product.price;
        return [...prevCart, newProduct];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const updateCart = (productId, quantity) => {
    setCart(prevCart => prevCart.map(product => product.id === productId ? { ...product, quantity } : product));
  };

  return (
    <ProductsContext.Provider value={{ products, cart, addToCart, removeFromCart, updateCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };
