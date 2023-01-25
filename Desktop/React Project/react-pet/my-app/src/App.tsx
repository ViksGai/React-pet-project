import React, { useState } from "react";

import "./App.css";
import { Cart } from "./components/cart/cart";
import { Header } from "./components/layout/header";
import { Meals } from "./components/meals/meals";
import { CartProvider } from "./store/cart-provider";

export const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
