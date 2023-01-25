import b from "b_";
import { ICard } from "../../../interfaces";
import { MealItemForm } from "./meal-item-form";
import "./meal-item.scss";

export const MealItem = (props: ICard) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={b("meal")}>
      <div>
        <h3>{props.name}</h3>
        <div className={b("meal", "description")}>{props.description}</div>
        <div className={b("meal", "price")}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
