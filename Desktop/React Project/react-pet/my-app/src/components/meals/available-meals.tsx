import b from 'b_';
import {MOCK_MEALS} from '../../MOCK_MEALS'

import './available-meals.scss';

export const AvailableMeals = () => {
    return (
        <section className={b('meals')}>
            <ul>
                {MOCK_MEALS.map((meal) =>(
                    <li>{meal.name}</li>
                ))}
            </ul>
        </section>
    )
}