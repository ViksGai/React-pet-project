import { Fragment } from 'react'
import { AvailableMeals } from './available-meals'
import { MealsSummary } from './meals-summary'
import './meals.scss'

export const Meals = () => {
return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
)
}