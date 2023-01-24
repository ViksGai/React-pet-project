import b from "b_";
import { CartIcon } from "../cart/cart-icon";
import './header-cart-button.scss';

export const HeaderCartButton = () => {
    return <button className={b('button')}>
        <span className={b('button', 'icon')}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={b('button', 'badge')}>
            3
        </span>
    </button>
}