import b from 'b_';
import { Input } from '../../UI/input';

import './meal-item-form.scss';

export const MealItemForm = (props: any) => {
    return <form className={b('form')}>
        <Input label="Amount" input={{
            id: 'amount' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
    </form>
}