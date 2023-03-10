import b from "b_";
import { Card } from "../UI/card";
import { MealItem } from "./meal-item/meal-item";

import "./available-meals.scss";
import { useEffect, useState } from "react";
import { ICard } from "../../interfaces";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpErr, setHttpErr] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://pet-react-b09e5-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

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
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpErr(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={b("loading")}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpErr) {
    return (
      <section className={b("error")}>
        <p>{httpErr}</p>
      </section>
    );
  }

  return (
    <section className={b("meals")}>
      <Card>
        <ul>
          {meals.map((meal: ICard) => (
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
