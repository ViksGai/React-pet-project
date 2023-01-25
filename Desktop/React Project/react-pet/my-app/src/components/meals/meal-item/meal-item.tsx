import b from "b_";
import { useContext } from "react";
import { ICard } from "../../../interfaces";
import { CartContex } from "../../../store/cart-contex";
import { MealItemForm } from "./meal-item-form";
import "./meal-item.scss";

export const MealItem = (props: ICard) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctxCart = useContext(CartContex);

  const addItemToCartHandler = (amount: any) => {
    ctxCart.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={b("meal")}>
      <div>
        <h3>{props.name}</h3>
        <div className={b("meal", "description")}>{props.description}</div>
        <div className={b("meal", "price")}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};
