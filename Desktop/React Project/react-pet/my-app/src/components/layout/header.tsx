import b from "b_";
import { Fragment } from "react";

import mealsImg from '../../assets/meals.jpg';
import { HeaderCartButton } from "./header-cart-button";
import './header.scss'

export const Header = (props: any) => {
    return (
    <Fragment>
        <header className={b('header')}>
            <h1 className={b('header', 'title')}>Meals</h1>
           <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={b('main-image')}>
            <img src={mealsImg} alt='food'/>
        </div>
    </Fragment>
    )
}