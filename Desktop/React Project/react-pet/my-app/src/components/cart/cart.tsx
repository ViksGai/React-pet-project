import b from "b_";
import { Fragment, useContext, useState } from "react";
import { CartContex } from "../../store/cart-contex";
import { Modal } from "../UI/modal";
import { CartItem } from "./cart-item";
import { Checkout } from "./checkout";
import "./cart.scss";
import { ICard } from "../../interfaces";

export const Cart = (props: any) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContex);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: any) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsShowForm(true);
  };

  const submitOrderHandler = (userData: ICard) => {
    setIsSubmitting(true);
    fetch("https://pet-react-b09e5-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const isSubmittingModalContent = <p>Waiting for submitting the form...</p>;
  const didSubmitModalContent = (
    <Fragment>
      <p>Your order was sent!</p>
      <div className={b("actions-btns")}>
        <button
          className={b("actions-btns", "button-alt")}
          onClick={props.onClose}
        >
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && (
        <Fragment>
          <ul className={b("cart-items")}>
            {cartCtx.items.map((item: any) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
              />
            ))}
          </ul>
          <div className={b("total-amount")}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {isShowForm && (
            <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
          )}
          {!isShowForm && (
            <div className={b("actions-btns")}>
              <button
                className={b("actions-btns", "button-alt")}
                onClick={props.onClose}
              >
                Close
              </button>
              {hasItems && (
                <button
                  className={b("actions-btns", "button")}
                  onClick={orderHandler}
                >
                  Order
                </button>
              )}
            </div>
          )}
        </Fragment>
      )}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};
