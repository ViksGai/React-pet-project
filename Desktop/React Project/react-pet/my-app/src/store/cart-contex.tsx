import React from "react";

export const CartContex = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: number) => {},
  clearCart: () => {},
});
