import React, { useContext} from "react"
import { Link } from 'react-router-dom';
import { CONTEXT } from './storeContext'

function Header() {
    const { cartItems } = useContext(CONTEXT);
    const cartClassName = cartItems.length > 0 ? 'fill' : 'line';
    return (
        <header>
            <Link to='/'>
                <h2>Olly Estore</h2>
            </Link>
            <Link to='/cart'>
                <i className={`ri-shopping-cart-${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header