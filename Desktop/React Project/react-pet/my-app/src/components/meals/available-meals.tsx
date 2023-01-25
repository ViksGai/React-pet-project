import b from 'b_';
import {MOCK_MEALS} from '../../MOCK_MEALS'
import { Card } from '../UI/card';
import { MealItem } from './meal-item/meal-item';

import './available-meals.scss';


export const AvailableMeals = () => {
    return (
        <section className={b('meals')}>
            <Card>
            <ul>
                {MOCK_MEALS.map((meal) =>(
                    <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id}/>
                ))}
            </ul>
            </Card>
        </section>
    )
}