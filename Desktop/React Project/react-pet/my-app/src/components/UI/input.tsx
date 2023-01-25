import b from 'b_';
import { IInput } from '../../interfaces';

import './input.scss';

export const Input = (props: IInput) => {
    return <div className={b('input')}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
}