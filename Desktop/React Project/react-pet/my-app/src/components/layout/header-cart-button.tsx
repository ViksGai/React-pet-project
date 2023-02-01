import b from "b_";
import { useContext, useEffect, useState } from "react";
import { CartContex } from "../../store/cart-contex";
import { CartIcon } from "../cart/cart-icon";
import "./header-cart-button.scss";

export const HeaderCartButton = (props: any) => {
  const [isBtnHighlighted, setIsBtnHighlightes] = useState(false);
  const cartCtx = useContext(CartContex);
  const { items } = cartCtx;
  const btnClasses = `button + " " + ${isBtnHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setIsBtnHighlightes(true);

    const timer = setTimeout(() => {
      setIsBtnHighlightes(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItem = cartCtx.items.reduce(
    (curNum, item: any) => curNum + item.amount,
    0
  );

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={b("button", "icon")}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={b("button", "badge")}>{numberOfCartItem}</span>
    </button>
  );
};
