import b from 'b_';

import './card.scss'


export const Card = (props: any) => {
    return(
        <div className={b('card')}>{props.children}</div>
    )
}