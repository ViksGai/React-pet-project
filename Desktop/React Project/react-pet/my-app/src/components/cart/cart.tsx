import b from "b_";
import { useContext } from "react";
import { CartContex } from "../../store/cart-contex";
import { Modal } from "../UI/modal";
import { CartItem } from "./cart-item";

import "./cart.scss";

export const Cart = (props: any) => {
  const cartCtx = useContext(CartContex);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;
  
const cartItemRemoveHandler =(id: any) => {
  cartCtx.removeItem(id);
};
const cartItemAddHandler = (item: any) => {
  cartCtx.addItem({...item,amount: 1});
};

  return (
    <Modal onClose={props.onClose}>
      <ul className={b("cart-items")}>
        {cartCtx.items.map((item: any) => (
          <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount}  onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>
        ))}
      </ul>
      <div className={b("total-amount")}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={b("actions-btns")}>
        <button
          className={b("actions-btns", "button-alt")}
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && <button className={b("actions-btns", "button")}>Order</button>}
      </div>
    </Modal>
  );
};
