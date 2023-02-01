import b from "b_";
import { MOCK_MEALS } from "../../MOCK_MEALS";
import { Card } from "../UI/card";
import { MealItem } from "./meal-item/meal-item";

import "./available-meals.scss";
import { useEffect, useState } from "react";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState<any>([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://pet-react-b09e5-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);
  return (
    <section className={b("meals")}>
      <Card>
        <ul>
          {meals.map((meal: any) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              id={meal.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};
