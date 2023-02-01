import b from "b_";
import "./cart-item.scss";

export const CartItem = (props: any) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={b("cart-item")}>
      <div>
        <h2>{props.name}</h2>
        <div className={b("total")}>
          <span className={b("total", "price")}>{price}</span>
          <span className={b("total", "amount")}>x {props.amount}</span>
        </div>
      </div>
      <div className={b("cart-item","actions")}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};
