import b from "b_";
import { Modal } from "../UI/modal";

import "./cart.scss";

export const Cart = (props: any) => {
  return (
    <Modal onClose={props.onClose}>
      <ul className={b("cart-items")}>
        {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={b("total")}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={b("actions")}>
        <button
          className={b("actions", "button-alt")}
          onClick={props.onClose}
        >
          Close
        </button>
        <button className={b("actions", "button")}>Order</button>
      </div>
    </Modal>
  );
};
