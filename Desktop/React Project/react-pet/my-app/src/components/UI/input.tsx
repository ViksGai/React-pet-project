import b from 'b_';
import React from 'react';
import { IInput } from '../../interfaces';

import './input.scss';

export const Input = React.forwardRef((props: IInput, ref: any) => {
    return <div className={b('input')}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
})