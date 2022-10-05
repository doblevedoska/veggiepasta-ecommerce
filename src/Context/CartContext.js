import React, { useState, useContext } from "react";


const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, cantidad: product.cantidad + cantidad }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  
  const PrecioTotal = () =>
    cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);


  const ProdTotal = () =>
    cart.reduce(
      (acumulador, productActual) => acumulador + productActual.cantidad,
      0
    );




  console.log("Cart de CartContext:", cart);

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };


  const removeItem = (id) => {
    return setCart(cart.filter((product) => product.id !== id));
  };

  const clear = () => setCart([]);
  
  
  return (
    <>
      <CartContext.Provider
        value={{
          addItem,
          clear,
          isInCart,
          removeItem,
          PrecioTotal,
          ProdTotal,
          cart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};