import b from "b_";
import { useContext } from "react";
import { CartContex } from "../../store/cart-contex";
import { CartIcon } from "../cart/cart-icon";
import "./header-cart-button.scss";

export const HeaderCartButton = (props: any) => {

  const cartCtx = useContext(CartContex);
  const numberOfCartItem = cartCtx.items.reduce((curNum, item: any) => curNum + item.amount, 0);

  return (
    <button className={b("button")} onClick={props.onClick}>
      <span className={b("button", "icon")}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={b("button", "badge")}>{numberOfCartItem}</span>
    </button>
  );
};
